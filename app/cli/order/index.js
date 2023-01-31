const { OrderController } = require('../../modules/controllers');

/**
 *
 * @param {Function} cmd
 * @returns
 */
const orderCli = (cmd) => {
    cmd.command('orders <customer>')
        .alias('o')
        .option('-c, --customer <customer>')
        .description('Print list orders of customers')
        .action((customer) => {
            OrderController.getOrderByName(customer);
        });
};

module.exports = {
    OrderCli: orderCli,
};
