import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";

import Login from "./pages/Login";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";


export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
