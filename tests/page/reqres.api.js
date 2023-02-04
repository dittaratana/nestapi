import BaseAPI from '$root/page/base.api';

const reqresApi = {
    register: (data) => BaseAPI.post('/register', data),
    list_users: (param) => BaseAPI.get(`/users?page=${param}`),
    login: (data) => BaseAPI.post('/login', data)
}

export default reqresApi;
