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
            <span className="self-end w-full centered gap-x-4">
                <button className="w-24 px-3 py-1 capitalize border-2 border-silver/20">edit</button>
                <button className="w-24 px-3 py-1 capitalize border-2 border-silver/20">delete</button>
            </span>
            
        </>
     );
}
 
export default RecordDetail;