import { HiOutlineChartBar as Chart, HiOutlineHome as Home } from "react-icons/hi2";

const Sidebar = () => {
    return ( 
        <aside className="fixed bottom-0 left-0 w-screen px-8 py-4 h-28 bg-midnight text-silver centered">
            <div className="w-full h-full spaced">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lightblue to-darkblue"></div>
                <span className="w-1/3 spaced">
                    <button className="p-3 bg-shadow rounded-2xl">
                        <Home className="stroke-1 text-silver" size={40}/>
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