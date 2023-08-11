import { Heading, Row } from "."
import { useApiData } from "../hooks";

const AccountsHome = () => {
    const baseURL = "http://localhost:5273"
    const endpoint = '/api/fetch/account?user=64d3d7e48f3aee818fc95876'
    const { data, isLoading, error } = useApiData('GET', endpoint, baseURL)

    return ( 
        <>
            <Heading path="/accounts/new"/>
            {!isLoading && data.map(item => <Row key={item._id} subtitle={item.account} amount={item.amount} />)}
        </>
     );
}
 
export default AccountsHome;