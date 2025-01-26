import axios from 'axios'

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/`,
    withCredentials: true
});

const get = async (endpoint: string) => {
    try {
        const { data } = await instance.get(endpoint);
        return data
    } catch (err) {
        throw new Error(err + "");
    }
}


const post = async (endpoint: string, details: any = null) => {
    if (!details) return
    try {
        const { data } = await instance.post(endpoint, details);
        return data
    } catch (err) {
        throw new Error(err + "");
    }
}

export const httpService = {
    get,
    post
}