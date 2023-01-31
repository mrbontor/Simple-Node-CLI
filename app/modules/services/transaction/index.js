const { TransactionRepository } = require('../../repositories');
const OrderSerice = require('../order');
const { NotFoundError } = require('../../../helpers/exceptions');

const { CountPointer } = require('../pointCalculator');

module.exports = {
    countTotalAmountTransactionAndPoints: (name) => {
        const transactions = TransactionRepository.getTrasactions(name);
        const orders = OrderSerice.getOrderByName(name);

        if (transactions.length > 0 && orders.length > 0) {
            const totalAmountTransaction = transactions.reduce(
                (sum, current) => sum + current.total_amount_transaction,
                0,
            );
            const totalPoints = CountPointer(totalAmountTransaction);
            const totalItems = orders[0].products.length || 0;

            return {
                totalAmountTransaction,
                totalPoints,
                totalItems,
            };
        } else {
            throw new NotFoundError('No data transactions!');
        }
    },

    countTotalTransactions: () => {
        const transactions = TransactionRepository.getTrasactions();
        if (transactions.length > 0) {
            const totalAmountTransaction = transactions.reduce(
                (sum, current) => sum + current.total_amount_transaction,
                0,
            );
            return { totalAmountTransaction };
        } else {
            throw new NotFoundError('No data transactions!');
        }
    },
};
