import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useApiData } from "../hooks"

const useFetchContext = (submitData) => {
    const { auth } = useAuth()
    const {data, isLoading, Error, fetchData } = useApiData(submitData)

    useEffect(() => {
        if (auth){
            fetchData({id: auth.id})
        }
    }, [auth])
    
    return { data, isLoading, Error };
}
 
export 

default useFetchContext;