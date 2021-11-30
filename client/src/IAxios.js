import axios from 'axios'

const LOCAL_HOST_ROOT_API = 'http://localhost:8080';

const axiosRequestBuilder = (API_URL, URL, METHOD) => {
    switch (METHOD) {
        case 'GET':
            return axios.get(`${API_URL}/${URL}`);
        default:
            return;
    }


};

const requests = {
    get: url =>
        axiosRequestBuilder(LOCAL_HOST_ROOT_API, url, 'GET')
};

const Information = {
    getInfo: () =>
        requests.get(`dashboard/info`),
    getAllContent: () =>
        requests.get(`dashboard/content`)
};

const Info = {
    Information
}

export default Info;