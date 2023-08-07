import { ProgressBar } from "../util"

const DetailBanner = () => {
    return ( 
        <div className="bg-shadow rounded-3xl p-8 centered-col gap-y-6 mt-8">
            <article className="centered-col gap-y-2">
                <h3 className="text-xl">Current Balance</h3>
                <h2 className="text-3xl">$65,000.00</h2>
            </article>
            <ProgressBar />
        </div>
     );
}
 
export default DetailBanner;