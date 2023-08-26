import { ProgressBar } from "../util"
import { fetchCurrentTotal as submitData } from "../../constant/requestText"
import { useFetchContext } from "../../hooks"

const DetailBanner = () => {

    const { data, isLoading, Error } = useFetchContext(submitData)    

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
                {isLoading && <h2 className="w-full h-8 text-3xl bg-silver/30"></h2>}
                {!isLoading && <h2 className="text-3xl">{current}</h2>}
            </article>
            <ProgressBar />
        </div>
     );
}
 
export default DetailBanner;