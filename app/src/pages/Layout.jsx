import {Outlet, Link} from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import Dashboard from "./Dashboard";
import SideBar from "../components/Nav/SideBar";


const Layout =  () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <aside className="col-12 col-md-3 col-lg-2" id="sidebar">
                        <SideBar/>
                    </aside>
                    <main className=" col-sm-12 col-md-9 col-lg-10">
                        <Dashboard/>
                    </main>
                </div>
            </div>
            <Outlet/>
        </>
    )
};

export default Layout;