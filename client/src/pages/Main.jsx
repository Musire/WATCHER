import { Outlet } from "react-router-dom";
import { Canvas, Sidebar } from "."

const Main = () => {
    return ( 
        <Canvas>
            <Outlet />
            <Sidebar />
        </Canvas>
     );
}
 
export default Main;