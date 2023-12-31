import { HiOutlineArrowNarrowLeft as Arrow, HiOutlinePlusCircle as Plus } from "react-icons/hi";
import { useBack, useCurrent } from "../../hooks"
import { Link } from "react-router-dom";

const Heading = ({ path, title=null}) => {
    const { goBack } = useBack()
    const { current } = useCurrent()

    return ( 
        <div className="sticky top-0 left-0 py-4 spaced bg-midnight/70 backdrop-blur-md ">
            <button className="" onClick={() => goBack()}> 
                <Arrow size={50} className="stroke-1" />
            </button>
            <h3 className="text-3xl capitalize">{title || current}</h3>
            <Link to={path} className={`${!path? 'collapse' : ''} `}>
                <Plus size={45} className="stroke-1" />
            </Link>
        </div>
     );
}
 
export default Heading;