import { Heading, Table } from "."
import { useFetchContext } from "../hooks";
import { fetchLedgerData } from "../constant/requestText"

const LedgerHome = () => {

    const { data, isLoading, Error } = useFetchContext(fetchLedgerData)

    return ( 
        <>
            <Heading path="/ledger/new"/>
            {!isLoading && <Table transactions={data} dataType="account"/>}
            {Error ? <h4 className="">{ Error }</h4> : null}
        </>
     );
}
 
export default LedgerHome;