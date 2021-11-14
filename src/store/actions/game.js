import axios from "axios";

const register = async (username, phoneNumber) => {
    const service = await axios({
        method: 'POST',
        baseURL: 'https://sweet-17-be.herokuapp.com',
        url: '/user/create',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With'
        },
        data: {
            'username': username,
            'phoneNumber': phoneNumber
        }
    })
    return service;
}

const storeScore = async (phone, score) => {
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

const game = {
    register,
    storeScore
}

export default game;
