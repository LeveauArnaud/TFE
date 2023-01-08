import {Outlet, Link} from "react-router-dom";
import Navbar from "../components/Nav/NavBar";
import Dashboard from "./Dashboard";

const Layout =  () => {
    return (
        <>
        <Navbar/>
        <Dashboard/>
        <Outlet/>
        </>
    )
};

export default Layout;