import { HiOutlineTemplate as Ledger, HiOutlineViewGridAdd as Accounts, HiOutlineSwitchVertical as Goals } from "react-icons/hi";
import { Link } from "react-router-dom"

const Icons = {
    ledger: Ledger,
    accounts: Accounts,
    goals: Goals
}

const LinkButton = ({ variant }) => {
    const Icon = Icons[variant]
    return (
        <Link to={`/${variant}`} className="centered-col gap-y-2">
            <div className="w-20 h-20 rounded-full bg-shadow centered">
                <Icon className="stroke-1" size={40} />
            </div>
            <h5 className="text-lg capitalize">{variant}</h5>
        </Link>
     );
}
 
export default LinkButton;