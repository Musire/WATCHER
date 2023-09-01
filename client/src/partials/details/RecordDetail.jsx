import { useEffect } from "react"
import { useCurrent, useApiData, Heading, DetailPanel } from "./"

const RecordDetail = ({ api, variant }) => {
    const { current } = useCurrent()

    const { data, error, isLoading, fetchData } = useApiData(api)
    
    useEffect(() => {
        if (current) {
            fetchData({id: current})
        }
    }, [current])

    return ( 
        <>
            <Heading title="details"/>
            <div className="centered">
                <ul>
                    {!isLoading && data ? <DetailPanel data={data} variant={variant}/> : <div className="">loading...</div> }
                </ul>
            </div>
        </>
     );
}
 
export default RecordDetail;