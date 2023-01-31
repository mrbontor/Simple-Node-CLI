const { UserController } = require('../../modules/controllers');

/**
 *
 * @param {Function} cmd
 * @returns
 */
const userCli = (cmd) => {
    cmd.command('users')
        .alias('u')
        .description('Print list customers')
        .action(() => {
            UserController.getUsers();
        });
};

module.exports = {
    UserCli: userCli,
};
