import { Heading, Row } from "."
import { useApiData } from "../hooks";

const DetailsHome = () => {
    const baseURL = "http://localhost:5273"
    const endpoint = '/api/fetch/goal?user=64d3d7e48f3aee818fc95876'
    const { data, isLoading, error } = useApiData('GET', endpoint, baseURL)

    return ( 
        <>
            <Heading path="/details/new"/>
            {!isLoading && data.map(item => <Row key={item._id} subtitle={item.category} amount={item.amount} />)}
        </>
     );
}
 
export default DetailsHome;