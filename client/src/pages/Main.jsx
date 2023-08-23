import { Outlet } from "react-router-dom";
import { Canvas, Sidebar } from "."
import { withAuth } from "../HOC";

const Main = () => {
    return ( 
        <Canvas>
            <Outlet />
            <Sidebar />
        </Canvas>
     );
}

const AuthorizedComponent = withAuth(Main)

export default AuthorizedComponent;