const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const DetailPanel = ({ data, variant }) => {
    if (!data) return null

    const detailConfig = {
        ledger: {
            title: data.account,
            total: formatter.format(data.amount),
            labelOne: 'Type',
            valueOne: data.type,
            labelTwo: 'Category',
            valueTwo: data.category,
            labelThree: 'Area',
            valueThree: data.area
        },
        account: {
            title: data.account,
            total: data.total,
            currency: data.currency,
            labelOne: "Income",
            valueOne: formatter.format(data.income),
            labelTwo: "Expenses",
            valueTwo: formatter.format(data.expenses),
            labelThree: "Transfers",
            valueThree: formatter.format(data.transfers)
        },
        goal: {
            title: data.area,
            total: formatter.format(data.target),
            labelOne: 'Paid',
            valueOne: data.paid,
            labelTwo: 'Pending',
            valueTwo: data.pending,
            labelThree: 'Percentage',
            valueThree: data.percentage
        }
    }

    const selected = detailConfig[variant]

    return ( 
        <div className="centered-col gap-y-6 w-full capitalize">
            <h4 className="text-4xl">{selected.title}</h4>
            <span className="flex gap-x-4 mb-20">
                <p className="text-3xl">{selected.total}</p>
                <p className="text-3xl">{selected.currency || 'MXN'}</p>
            </span>
            <span className="flex w-full justify-between ">
                <p className="self-start">{selected.labelOne}</p>
                <p className="self-end">{selected.valueOne}</p>
            </span>
            <span className="flex w-full justify-between ">
                <p className="self-start">{selected.labelTwo}</p>
                <p className="self-end">{selected.valueTwo}</p>
            </span>
            <span className="flex w-full justify-between ">
                <p className="self-start">{selected.labelThree}</p>
                <p className="self-end">{selected.valueThree}</p>
            </span>
        </div>
     );
}
 
export default DetailPanel;