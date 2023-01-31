const { OrderService } = require('../../services');
const ResponseHelper = require('../../../helpers/response');

module.exports = {
    getOrderByName: (payload) => {
        try {
            const result = OrderService.getOrderByName(payload);
            return ResponseHelper.success(result, result[0].products, true);
        } catch (err) {
            ResponseHelper.error(err);
        }
    },
};
