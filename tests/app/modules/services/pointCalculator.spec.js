const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const {CountPointer} = require('../../../../app/modules/services/pointCalculator');


const earnPoint = (amount, point) => {
    if (isRoundUp) {
        return Math.ceil(amount / multiplerAmount) * point;
    }
    return Math.floor(amount / multiplerAmount) * point;
};
describe('Customer Point Calculator', () => {
    let countPointStub
    const totalTrx = {
        underOneMillion: 999999,
        oneMillion: 1000000,
        tenMillion: 10000000,
        twentyMillion: 20000000,
        thirtyMillion: 30000000,
        fourtyMillion: 40000000,
    };

    it('should return 104.999895 with multipler 1', () => {
        countPointStub = CountPointer(totalTrx.underOneMillion);
       
        expect(countPointStub).to.be.a('number');
        expect(countPointStub).equal(104.999895);
    });

    it('should return 105 with multipler 1.05', () => {
        countPointStub = CountPointer(totalTrx.oneMillion);
       
        expect(countPointStub).to.be.a('number');
        expect(countPointStub).equal(105);
    });

    it('should return 1010 with multipler 1.1', () => {
        countPointStub = CountPointer(totalTrx.tenMillion);
       
        expect(countPointStub).to.be.a('number');
        expect(countPointStub).equal(1100);
    });

    it('should return 2400 with multipler 1.2', () => {
        countPointStub = CountPointer(totalTrx.twentyMillion);
       
        expect(countPointStub).to.be.a('number');
        expect(countPointStub).equal(2400);
    });

    it('should return 3900 with multipler 1.3', () => {
        countPointStub = CountPointer(totalTrx.thirtyMillion);
       
        expect(countPointStub).to.be.a('number');
        expect(countPointStub).equal(3900);
    });
    it('should return 5600 with multipler 1.4', () => {
        countPointStub = CountPointer(totalTrx.fourtyMillion);
       
        expect(countPointStub).to.be.a('number');
        expect(countPointStub).equal(5600);
    });
});
