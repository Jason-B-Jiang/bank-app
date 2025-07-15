import CustomError from '../errors/CustomError.js';

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({
            errors: err.message
        });
    }

    res.status(400).send({
        errors: [
            {
                message: err.message
            }
        ]
    });
};

export default errorHandler;