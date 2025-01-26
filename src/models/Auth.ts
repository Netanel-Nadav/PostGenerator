export interface Credentials {
    firstName: string | undefined,
    lastName: string | undefined,
    email: string | undefined,
    password?: string | undefined,
    category: string | undefined,
    createdAt?: number | undefined
}


export interface LoginCredentials {
    email: string | undefined
    password: string | undefined
}