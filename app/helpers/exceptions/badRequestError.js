const ApplicationError = require('./applicationError');

class BadRequestError extends ApplicationError {
    constructor(message) {
        super(message || 'Invalid Request!', 400);
    }
}

module.exports = BadRequestError;
