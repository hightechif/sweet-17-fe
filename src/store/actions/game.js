import axios from "axios"

const register = async (phone) => {
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
