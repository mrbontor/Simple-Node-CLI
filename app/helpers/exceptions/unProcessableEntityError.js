const ApplicationError = require('./applicationError');

class UnprocessableEntityError extends ApplicationError {
    constructor(message) {
        super(message || 'Unprocessable request!', 422);
    }
}

module.exports = UnprocessableEntityError;
