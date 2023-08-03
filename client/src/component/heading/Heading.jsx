import { HiOutlineArrowNarrowLeft as Arrow, HiOutlinePlusCircle as Plus } from "react-icons/hi";

const Heading = ({text}) => {
    return ( 
        <div className="spaced">
            <button className="">
                <Arrow size={50} className="stroke-1" />
            </button>
            <h3 className="text-3xl">{text}</h3>
            <button className="">
                <Plus size={45} className="stroke-1" />
            </button>
        </div>
     );
}
 
export default Heading;