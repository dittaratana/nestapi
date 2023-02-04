import { assert } from 'chai';
import reqresApi from '$root/page/reqres.api';
import * as data from '$root/data/user.data';

// Describe = seperti Suite in Qase.io
describe('Register', function() {
    //It = Test Case
    it('Should succesful register when insert valid data', async () => {
        const response = await reqresApi.register(data.VALID_REGISTER);          
        
        assert.equal(response.status, 200);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
    });

    it('Should unsuccessful register when insert invalid data', async() => {
        const response = await reqresApi.register(data.INVALID_REGISTER);          
        
        assert.equal(response.status, 400);
        
    });

})