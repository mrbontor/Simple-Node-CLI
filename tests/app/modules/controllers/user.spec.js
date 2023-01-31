const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const { UserService } = require('../../../../app/modules/services');
const { UserController } = require('../../../../app/modules/controllers');
const ResponseHelper = require('../../../../app/helpers/response');

const mockDB = require('../../mockDb/database.json');

describe('User Controller', () => {
    let userServiceStub, resSuccesStub, resErrorStub, response;

    beforeEach(() => {
        userServiceStub = sinon.stub(UserService, 'getUsers');
        resSuccesStub = sinon.stub(ResponseHelper, 'success');
        resErrorStub = sinon.stub(ResponseHelper, 'error');
    });

    afterEach(() => {
        userServiceStub.restore();
        resSuccesStub.restore();
        resErrorStub.restore();
    });
    describe('Get User ', () => {
        it('Success', () => {
            userServiceStub.returns(mockDB.users);
            resSuccesStub.returns(mockDB.users);
            response = UserController.getUsers();

            expect(userServiceStub.calledOnce).to.be.true;
            expect(resSuccesStub.calledOnce).to.be.true;

            expect(response).to.be.an('array');
            response.every((i) => expect(i).to.have.all.keys('name'));
            expect(response).to.have.length.at.least(1);
        });

        it('Error No data users!', () => {
            userServiceStub.returns([]);
            try {
                UserController.getUsers();
            } catch (error) {
                expect(getUsersStub.calledOnce).to.be.true;
                expect(resErrorStub.calledOnce).to.be.true;

                expect(error.message).to.equal('No data users!');
                expect(error.statusCode).to.equal(404);
                expect(error.errors).to.be.null;
            }
        });
    });
});
