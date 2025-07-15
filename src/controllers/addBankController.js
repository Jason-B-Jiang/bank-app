import BadRequestError from '../errors/BadRequestError.js';

// In-memory bank data
global.banks = [];

export const addBank = (req, res, next) => {
    const payload = req.body;

    // Normalize to an array
    const bankEntries = Array.isArray(payload) ? payload : [payload];

    const errors = [];
    const successfulAdds = [];

    for (const bank of bankEntries) {
        const { bankName, minLoanAmount, maxLoanAmount } = bank;

        if (typeof bankName !== 'string' || typeof minLoanAmount !== 'number' || typeof maxLoanAmount !== 'number') {
            errors.push(`Invalid data types for bank: ${JSON.stringify(bank)}`);
            continue;
        }

        if (minLoanAmount < maxLoanAmount) {
            banks.push(bank);
            successfulAdds.push(bankName);
        } else {
            errors.push(`Could not add ${bankName}: minLoanAmount (${minLoanAmount}) is not less than maxLoanAmount (${maxLoanAmount})`);
        }
    }

    if (errors.length > 0 && successfulAdds.length === 0) {
        // No banks added at all – return error
        next(new BadRequestError(errors.join('; ')));
    } else {
        // Some or all banks added
        res.status(200).json({
            message: `Banks added: ${successfulAdds.join(', ')}`,
            ...(errors.length > 0 && { warnings: errors })
        });
    }
};