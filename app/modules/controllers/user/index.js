const { UserService } = require('../../services');
const ResponseHelper = require('../../../helpers/response');

module.exports = {
    getUsers: () => {
        try {
            const result = UserService.getUsers();
            return ResponseHelper.success(result, result, true);
        } catch (err) {
            ResponseHelper.error(err);
        }
    },
};
