const ApplicationError = require('./applicationError');

class UnAuthorizedError extends ApplicationError {
    constructor(message) {
        super(message || 'Un Authorized!', 401);
    }
}

module.exports = UnAuthorizedError;
