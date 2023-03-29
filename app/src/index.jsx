import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/bootstrap.min.css';
import './assets/styles/dropdown.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";

import Login from "./pages/Login";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Agenda from "./pages/Agenda";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/agenda/:name" element={<Agenda/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

reportWebVitals();
