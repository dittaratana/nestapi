import { assert } from 'chai';
import reqresApi from '$root/page/reqres.api';
import * as data from '$root/data/user.data';

describe('Login', function() {
    //It = Test Case
    it('Should succesful login when insert valid data', async () => {
        const response = await reqresApi.login(data.SUCCES_LOGIN);          
        
        assert.equal(response.status, 200);
    });
})