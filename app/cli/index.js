'use strict';

const { program } = require('commander');
const { name, version, description, alias } = require('../../package.json');

const { TransactionCli } = require('./transaction');
const { UserCli } = require('./user');
const { OrderCli } = require('./order');

/**
 *
 * @param {String} args
 */
const buildCli = (args) => {
    program.version(version).name(name).alias(alias).description(description);

    TransactionCli(program);
    OrderCli(program);
    UserCli(program);

    program.parse();
    if (!program.args.length) program.help(`Please type --help for more information`);
};

module.exports = {
    BuildCli: buildCli,
};
