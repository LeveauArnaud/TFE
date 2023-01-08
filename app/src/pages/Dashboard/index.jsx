import '../../App.css';

function Dashboard() {
    return (

        <div>
        <div className="jumbotron">
            <h1 className="display-3 d-flex justify-content-center">Optical App DASHBOARD</h1>
            <div className="col-sm-12 text-center">
                <img src="../../assets/img/Logo-comptoir-optique-1.png" className=" w-50" alt="logo-App"/>
            </div>
            <p className="lead d-flex justify-content-center">Bienvenue sur l'application des opticiens COMPTOIR
                OPTIQUE</p>
            <p className="lead d-flex justify-content-center"> Cette application a été développée dans le cadre du
                TFE</p>
            <p className="lead d-flex justify-content-center"> ARNAUD LEVEAU</p>
            <p className="lead d-flex justify-content-center"> EPHEC 2022-2023</p>

        </div>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="SideNav"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;