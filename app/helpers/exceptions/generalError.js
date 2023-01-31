const ApplicationError = require('./applicationError');

class GeneralError extends ApplicationError {
    constructor(message) {
        super(message || 'something went wrong', 400);
    }
}

module.exports = GeneralError;
