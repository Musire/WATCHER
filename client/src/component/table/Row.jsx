import { Link } from "react-router-dom"

const Row = ({ transaction, dataType }) => {

    const typeConfig = {
        ledger : [transaction.category, transaction.area, transaction.amount],
        accounts : [transaction.account, transaction.currency, transaction.total],
        goals : [transaction.category, transaction.area, transaction.amount]
    }

    const config = typeConfig[dataType]

    return (
        <>
            {!config ? null : <Link to={`/${dataType}/details/${transaction._id}`} className="flex items-center self-end w-full p-4 gap-x-8 hover:bg-shadow ">
                <div className="w-10 h-10 rounded-full bg-silver"></div>
                <p className="text-lg capitalize ">{ config[0] }</p>
                <p className="text-lg capitalize ">{ config[1] }</p>
                <p className="text-lg">{ config[2] }</p>
            </Link>}
        </>
     );
}
 
export default Row;