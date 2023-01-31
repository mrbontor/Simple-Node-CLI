const ApplicationError = require('./applicationError');

class NotFoundError extends ApplicationError {
    constructor(message) {
        super(message || 'Data Not Found!', 404);
    }
}

module.exports = NotFoundError;
