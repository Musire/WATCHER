import { Heading, Table, Row } from "."
import { useApiData } from "../hooks";
import { useEffect } from "react"

const LedgerHome = () => {

    const requestData = {
        method: "GET",
        baseurl: "http://localhost:5273",
        url: '/api/fetch/record?user=64da703566eec4e5572af1de',
        body: {}
    }

    const { data, isLoading, error, fetchData } = useApiData(requestData)

    useEffect(() => {
        fetchData()
    }, [])

    return ( 
        <>
            <Heading path="/ledger/new"/>
            <Table title="07/25/2023">
                {!isLoading && data.map(item => <Row key={item._id} subtitle={item.area} amount={item.amount.toFixed(2)} />)}
            </Table>
        </>
     );
}
 
export default LedgerHome;