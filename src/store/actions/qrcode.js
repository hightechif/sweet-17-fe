import axios from "axios";

const getQRcode = async () => {
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

const endpointValidation = async () => {
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

const qrcode = {
    getQRcode,
    endpointValidation
}

export default qrcode;
