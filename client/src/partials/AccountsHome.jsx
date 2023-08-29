import { Heading, Row } from "."
import { useFetchContext } from "../hooks";
import { fetchAccountData } from "../constant/requestText"

const AccountsHome = () => {

    const { data, isLoading, Error } = useFetchContext(fetchAccountData)

    return ( 
        <>
            <Heading path="/accounts/new"/>
            {!isLoading ? data.map(item => <Row key={item._id} transaction={item} dataType="account"/>) : null}
            {Error ? <h4 className="">{ Error }</h4> : null}
        </>
     );
}
 
export default AccountsHome;