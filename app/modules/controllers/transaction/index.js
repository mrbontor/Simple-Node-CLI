const { TransactionService } = require('../../services');
const ResponseHelper = require('../../../helpers/response');

module.exports = {
    getTotalAmountTransactionAndPoints: (payload) => {
        try {
            const result = TransactionService.countTotalAmountTransactionAndPoints(payload);
            return ResponseHelper.success(result, result);
        } catch (err) {
            ResponseHelper.error(err);
        }
    },

    getTotalAmountTransaction: () => {
        try {
            const result = TransactionService.countTotalTransactions();
            return ResponseHelper.success(result, result);
        } catch (err) {
            ResponseHelper.error(err);
        }
    },
};
