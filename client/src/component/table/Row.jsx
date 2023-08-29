const Row = ({ transaction, dataType }) => {

    const typeConfig = {
        record : [transaction.category, transaction.area, transaction.amount],
        account : [transaction.account, transaction.currency, transaction.total],
        goal : [transaction.category, transaction.area, transaction.amount]
    }

    const config = typeConfig[dataType]

    return (
        <>
            {!config ? null : <span className="flex items-center self-end w-full p-4 gap-x-8 hover:bg-shadow ">
                <div className="w-10 h-10 rounded-full bg-silver"></div>
                <p className="text-lg capitalize ">{ config[0] }</p>
                <p className="text-lg capitalize ">{ config[1] }</p>
                <p className="text-lg">{ config[2] }</p>
            </span>}
        </>
     );
}
 
export default Row;