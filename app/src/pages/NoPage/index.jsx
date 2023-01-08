import {Link} from "react-router-dom";

const NoPage = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <h2 className="fs-3"><span className="text-danger">Oups!</span></h2>
                <p className="lead">
                    La page recherchée n'existe pas.
                </p>
                <Link to="/" className="btn btn-primary">Retour</Link>
            </div>
        </div>
    );
};

export default NoPage;