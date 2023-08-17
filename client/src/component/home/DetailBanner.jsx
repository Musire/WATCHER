import { ProgressBar } from "../util"
import { useApiData } from "../../hooks"
import { useEffect } from "react"

const DetailBanner = () => {
    const submitData = {
        method: "GET",
        url: "/api/current?user=64da703566eec4e5572af1de",
        baseurl: "http://localhost:5273", 
        body: ""
    }
    const {data, error, isLoading, fetchData } = useApiData(submitData)

    useEffect(() => {
        fetchData()
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