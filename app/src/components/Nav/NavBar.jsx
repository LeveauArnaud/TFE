import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import { IconContext } from "react-icons";
import "../../assets/styles/navbar.css"

function Navbar() {
    const [navsidebar, setNavsidebar] = useState(true);

    const showSidebar = () => setNavsidebar(!navsidebar);

    return (

        <>
            <nav className="navbar navbar-dark bg-dark d-md-none">
                <div className="container-fluid">
                    <button className="navbar-toggler d-block" type="button" data-bs-toggle="collapse"
                            data-bs-target="#sidebar" aria-controls="navbarToggleExternalContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;