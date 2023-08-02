import { HiOutlineChartBar as Chart, HiOutlineHome as Home } from "react-icons/hi2";

const Sidebar = () => {
    return ( 
        <aside className="w-screen h-28 bg-midnight text-silver fixed bottom-0 left-0 px-8 py-4 centered">
            <div className="w-full h-full spaced">
                <div className="h-16 w-16 bg-gradient-to-br from-lightblue to-darkblue rounded-full"></div>
                <span className="spaced w-1/3">
                    <button className="p-3 bg-silver rounded-2xl">
                        <Home className="stroke-1 text-midnight" size={40}/>
                    </button>
                    <button className="">
                        <Chart className="stroke-1" size={40}/>
                    </button>
                </span>
            </div>
        </aside>
     );
}
 
export default Sidebar;