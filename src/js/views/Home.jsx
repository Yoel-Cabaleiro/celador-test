import React from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/home.css"

export const Home = () => {
    return (
        <div className="container">
            <button><Link to="/practica">Práctica</Link></button>
            <button><Link to="/examen">Examen</Link></button>
        </div>
    )
}