import { ProgressBar } from "../util"
import { useApiData } from "../../hooks"
import { useEffect } from "react"
import { useAuth } from "../../context/AuthContext"

const DetailBanner = () => {

    const { auth } = useAuth()
    console.log(auth)
    
    const submitData = {
        method: "GET",
        url: `/api/`,
        baseurl: "http://localhost:5273"
    }
    const {data, error, isLoading, fetchData } = useApiData(submitData)

    useEffect(() => {
        fetchData({id: auth ? auth.id : ''})
    }, [])

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      
      const current = formatter.format(data.total);

    return ( 
        <div className="p-8 mt-8 bg-shadow rounded-3xl centered-col gap-y-6">
            <article className="centered-col gap-y-2">
                <h3 className="text-xl">Current Balance</h3>
                {!isLoading && <h2 className="text-3xl">{current}</h2>}
            </article>
            <ProgressBar />
        </div>
     );
}
 
export default DetailBanner;