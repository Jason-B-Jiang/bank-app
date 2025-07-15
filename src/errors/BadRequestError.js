import CustomError from "./CustomError.js";

class BadRequestError extends CustomError {
    constructor(message) {
        super(message, 400);
    }
};

export default BadRequestError;