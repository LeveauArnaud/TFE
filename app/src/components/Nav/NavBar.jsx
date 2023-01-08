import React from "react";
import classNames from "classnames";

const Navbar = (id) => {
    const navClasses = classNames(
        "navbar",
        "bg-primary", "navbar-expand-lg", "navbar-dark"
    );


    return (

        <nav className={navClasses}>
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">
                    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap"
                         width="30" height="24"></img>
                </a>
            </div>
            <div>
                <button className="navbar-toggler justify-content-start"
                        type="button" data-toggle="collapse"
                        data-target={id}
                        aria-controls="SideNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon justify-content-start"></span>
                </button>
            </div>
            <div className="dropdown collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    Utilisateur
                </button>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Mon profile</a></li>
                    <li><a className="dropdown-item" href="#">Paramètres</a></li>
                    <li><a className="dropdown-item" href="#">Déconnexion</a></li>
                </ul>

            </div>


        </nav>
    )
        ;
};

export default Navbar;
