import { Heading, Row, Table } from "."
import { useApiData } from "../hooks";
import { useEffect } from "react"

const DetailsHome = () => {
    const requestData = {
        method: "GET",
        baseurl: "http://localhost:5273",
        url: '/api/fetch/goal?user=64da703566eec4e5572af1de',
        body: {}
    }

    const { data, isLoading, error, fetchData } = useApiData(requestData)

    useEffect(() => {
        fetchData()
    }, [])

    return ( 
        <>
            <Heading path="/details/new"/>
            <Table>
                {!isLoading && data.map(item => <Row key={item._id} subtitle={item.category} amount={item.amount} />)}
            </Table>
        </>
     );
}
 
export default DetailsHome;