import chai, { assert, expect } from 'chai';
import reqresApi from '$root/page/reqres.api';
import * as data from '$root/data/user.data';
import { getParams} from '$root/helper/lib-api';
import jsonSchema from 'chai-json-schema';
import * as schema from '$root/schema/list-users.schema';

chai.use(jsonSchema);

describe('List Users', () => {
    it('Should succesfully get list users', async() => {
        const param = getParams(data.LIST_USER_PARAM['page']);
        const response = await reqresApi.list_users(param);
        
        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_PARAMS);
    });
})