import { HiOutlineArrowNarrowLeft as Arrow, HiOutlinePlusCircle as Plus } from "react-icons/hi";
import { useBack, useCurrent } from "../../hooks"

const Heading = () => {
    const { goBack } = useBack()
    const { current } = useCurrent()

    return ( 
        <div className="spaced">
            <button className="" onClick={() => goBack()}> 
                <Arrow size={50} className="stroke-1" />
            </button>
            <h3 className="text-3xl capitalize">{current}</h3>
            <button className="">
                <Plus size={45} className="stroke-1" />
            </button>
        </div>
     );
}
 
export default Heading;