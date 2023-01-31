module.exports = {
    /**
     *
     * @param {Object} data
     * @param {String} message
     * @param {Boolean} isTable
     * @returns
     */
    success: (data, message = 'Success.', isTable = false) => {
        if (isTable) console.table(message);
        else console.log(message);
        return data;
    },
    customSuccessMessage: (data = {}, message) => {
        console.log(message);

        return data;
    },

    error: (error) => {
        console.log(
            `> Err ${error.statusCode}, ${error.message} \n> Please type --help for more information`,
        );
        return error;
    },
};
