import { Heading, Table, Row } from "."
import { useApiData } from "../hooks";

const LedgerHome = () => {
    const baseURL = "http://localhost:5273"
    const endpoint = '/api/fetch/record?user=64d3d7e48f3aee818fc95876'
    const { data, isLoading, error } = useApiData('GET', endpoint, baseURL)

    return ( 
        <>
            <Heading path="/ledger/new"/>
            <Table title="07/25/2023">
                {!isLoading && data.map(item => <Row key={item._id} subtitle={item.category} amount={item.amount} />)}
            </Table>
        </>
     );
}
 
export default LedgerHome;