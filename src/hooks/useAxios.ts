import React, { useEffect, useState } from 'react'
import axios from 'axios'

const instance = axios.create({
    baseURL: 'localhost:3030/'
});


export const useAxios = (endpoint: string = "", method: string = "GET", details: any = null) => {

    const [data, setData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)


    useEffect(() => {
        checkMethod()
    }, [endpoint, method])


    const get = async () => {
        setIsLoading(true)
        try {
            const { data } = await instance.get(endpoint);
            setData(data)
        } catch (err) {
            setData(null);
            throw new Error(err + "");
        }
        finally {
            setIsLoading(false)
        }
    }

    const post = async () => {
        setIsLoading(true)
        try {
            const { data } = await instance.post(endpoint, details);
            setData(data)
        } catch (err) {
            setData(null);
            throw new Error(err + "");
        }
        finally {
            setIsLoading(false)
        }
    }

    const checkMethod = () => {
        switch (method) {
            case "GET":
                get()
                break;
            case "POST":
                post()
                break;
            case "PUT":
    
                break;
            case "DELETE":
    
                break;
    
            default:
                break;
        }
    }


   


    return { data, isLoading }
}
