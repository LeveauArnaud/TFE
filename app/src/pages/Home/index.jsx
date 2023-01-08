import '../../App.css';

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-3 d-flex justify-content-center">Optical App</h1>
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
    );
}

export default Home;
