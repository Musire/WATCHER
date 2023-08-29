import { Heading, Row } from "."
import { useFetchContext } from "../hooks";
import { fetchGoalData } from "../constant/requestText"

const GoalsHome = () => {

    const { data, isLoading, Error } = useFetchContext(fetchGoalData)

    return ( 
        <>
            <Heading path="/goals/new"/>
            {!isLoading ? data.map(item => <Row key={item._id} transaction={item} dataType="goal"/>) : null}
            {Error ? <h4 className="">{ Error }</h4> : null}
        </>
     );
}
 
export default GoalsHome;