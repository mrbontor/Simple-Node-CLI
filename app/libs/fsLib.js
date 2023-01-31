const fs = require('fs');
const { GeneralError } = require('../helpers/exceptions');

const checkPermission = (file) => {
    try {
        fs.accessSync(file, fs.constants.R_OK);
        return true;
    } catch (err) {
        return false;
    }
};
module.exports = {
    readData: (filePath) => {
        try {
            const canAccess = checkPermission(filePath);
            if (canAccess) {
                const data = fs.readFileSync(filePath, 'utf8');

                return JSON.parse(data);
            }
        } catch (error) {
            throw new GeneralError('Failed to read data!');
        }
    },

    writeData: (filePath, payload) => {
        const canAccess = checkPermission(filePath);
        if (canAccess) {
            const dataJson = JSON.stringify(payload, null, 4);

            fs.writeFile(filePath, dataJson, (err) => {
                if (err) throw err;

                return true;
            });
        }
    },
};
