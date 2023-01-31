const { TransactionController } = require('../../modules/controllers');

/**
 *
 * @param {Function} cmd
 * @returns
 */
const transactionCli = (cmd) => {
    cmd.command('point')
        .alias('p')
        .requiredOption('-c,--customer <name>', 'specify customer name')
        .description('Print loyalty point customer')
        .action((options) => {
            TransactionController.getTotalAmountTransactionAndPoints(options.customer);
        });

    cmd.command('transactions')
        .alias('t')
        .description('Print total amount transactions')
        .action((customer) => {
            TransactionController.getTotalAmountTransaction(customer);
        });
};

module.exports = {
    TransactionCli: transactionCli,
};
