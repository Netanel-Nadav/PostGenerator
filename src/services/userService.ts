import { Credentials, LoginCredentials } from "../models/Auth"
import { httpService } from "./httpService"


const logout = async () => {
    await httpService.post('/auth/logout');

}

const login = async (credentials: LoginCredentials) => {
    const loggedUser = await httpService.post('/auth/login', credentials);
    return loggedUser
}


const signup = async (credentials: Credentials) => {
    const sinedUser = await httpService.post('/auth/signup', credentials);
    return sinedUser
    
}

export const userService = {
    signup,
    login,
    logout
}