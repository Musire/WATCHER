import { Row } from "./"

const DateContainer = ({ date, transactions }) => {
    return (
      <div className="flex flex-col items-end w-full pb-32 ">
        <h2 className="self-start text-xl">{date}</h2>
        <ul>
          {transactions.map((transaction) => (
            <Row key={transaction._id} transaction={transaction} dataType='ledger'/>
          ))}
        </ul>
      </div>
    );
  }


const Table = ( transactions ) => {

  const groupedTransactions = () => {
    let group = {}

    for (let transaction of transactions.transactions) {
      let date = new Date(transaction.date).toLocaleDateString("en-US")

      if(!group[date]) {
        group[date] = []
      }

      group[date] = transactions.transactions
    }

    return group
  }


  return ( 
      <>
          {Object.entries(groupedTransactions()).map(([date, transactions]) => {
            return <DateContainer key={date} date={date} transactions={transactions} />
          })}
      </>
    );
}
 
export default Table;