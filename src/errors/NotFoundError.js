import CustomError from "./CustomError.js";

class NotFoundError extends CustomError {
    constructor() {
        super("Not found", 404);
    }
};

export default NotFoundError;