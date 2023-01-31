const totalTransaction = {
    oneMillion: 1000000,
    tenMillion: 10000000,
    twentyMillion: 20000000,
    thirtyMillion: 30000000,
    fourtyMillion: 40000000,
};

const multiplerAmount = 10000;

/**
 *
 * @param {Number} amount
 * @param {Number} point
 * @returns
 *
 * TODO: maybe better to rounding the the result
 */

const countPoint = (amount, point) => {
    const totalPoint = (amount / multiplerAmount) * point;
    return totalPoint; //parseFloat(totalPoint.toFixed(2));
};

const earnPoint = (amount) => {
    let givenPoint = 0;
    switch (true) {
        case amount < totalTransaction.oneMillion:
            givenPoint = countPoint(amount, 1);
        case amount >= totalTransaction.oneMillion && amount < totalTransaction.tenMillion:
            givenPoint = countPoint(amount, 1.05);
            break;
        case amount >= totalTransaction.tenMillion && amount < totalTransaction.twentyMillion:
            givenPoint = countPoint(amount, 1.1);
            break;
        case amount >= totalTransaction.twentyMillion && amount < totalTransaction.thirtyMillion:
            givenPoint = countPoint(amount, 1.2);
            break;
        case amount >= totalTransaction.thirtyMillion && amount < totalTransaction.fourtyMillion:
            givenPoint = countPoint(amount, 1.3);
            break;
        case amount >= totalTransaction.fourtyMillion:
            givenPoint = countPoint(amount, 1.4);
            break;
    }

    return givenPoint;
};

module.exports = {
    CountPointer: earnPoint,
};
