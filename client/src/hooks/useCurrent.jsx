import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useCurrent = () => {
    const [current, setCurrent] = useState()

    const location = useLocation()


    useEffect(() => {
        const Pathname = location.pathname
        const splitPathname = Pathname.split('/')

        setCurrent(splitPathname.slice(-1))

    }, [location])

    

    return { current };
}
 
export default useCurrent;