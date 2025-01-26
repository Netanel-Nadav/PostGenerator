const STORAGE_KEY = "post-user"


const loadFromStorage = () => {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return
    return JSON.parse(data)
}

const saveToStorage = (data: any) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

const getLoggedinUser = () => {
    const user = localStorage.getItem(STORAGE_KEY);
    if (user) return JSON.parse(user);
    else return null
}


export const storageServcie = {
    loadFromStorage,
    saveToStorage,
    getLoggedinUser
}