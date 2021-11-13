import axios from "axios";

const qrcode = async () => {
    const service = await axios({
        method: 'GET',
        baseURL: 'https://fadhil-auth.herokuapp.com',
        url: '/api/v1',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return service;
}

export default qrcode;
