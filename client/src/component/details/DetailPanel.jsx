

const DetailPanel = ({ data, variant }) => {

    if (!data) return 
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const detailConfig = {
        ledger: [],
        account: [data.account, data.total, data.income, data.expenses, data.transfers],
        goal: []
    }

    const selected = detailConfig[variant]

    return ( 
        <div className="centered-col gap-y-6 w-full">
            <h4 className="text-4xl">{selected[0]}</h4>
            <span className="flex gap-x-4 mb-20">
                <p className="text-3xl">{formatter.format(selected[1])}</p>
                <p className="text-3xl">USD</p>
            </span>
            <span className="flex w-full justify-between ">
                <p className="self-start">Income</p>
                <p className="self-end">{formatter.format(selected[2])}</p>
            </span>
            <span className="flex w-full justify-between ">
                <p className="self-start">Expenses</p>
                <p className="self-end">{formatter.format(selected[3])}</p>
            </span>
            <span className="flex w-full justify-between ">
                <p className="self-start">Transfers</p>
                <p className="self-end">{formatter.format(selected[4])}</p>
            </span>
        </div>
     );
}
 
export default DetailPanel;