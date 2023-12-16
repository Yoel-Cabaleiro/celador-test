import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/home.css"

export const Practica = () => {

    const {store, actions} = useContext(Context)

    const [pregunta, setPregunta] = useState({})
    const [clases, setClases] = useState(["", "", "", ""])
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(false)

    useEffect(() => {
        const random = Math.floor(Math.random() * (store.preguntas.length - 1))
        const preguntaRandom = store.preguntas[random]
        setPregunta(preguntaRandom)
        setRespuestaSeleccionada(false)
    }, [])

    useEffect(() => { 
        setClases(["", "", "", ""])
        setRespuestaSeleccionada(false)
    }, [pregunta])

    const handlePregunta = () => {
        const random = Math.floor(Math.random() * (store.preguntas.length - 1))
        const preguntaRandom = store.preguntas[random]
        setPregunta(preguntaRandom)
    }

    const resolve = (index, item) =>{
        const nuevasClases = [...clases]
        if(item.correct === true){
            nuevasClases[index] = "success"
        }
        else{
            nuevasClases[index] = "wrong"
            pregunta.Respuestas.map((resp, indx) => {
                if(resp.correct === true){
                    nuevasClases[indx] = "success"
                }
            })
        }
        setClases(nuevasClases)
        setRespuestaSeleccionada(true)

    }


    return(
        <>
            {pregunta && (<div className="container my-5">
                <div className="num me-3"><h1>{Object.keys(pregunta)[0]}:</h1></div>
                <div className="pregunta"><h2>{Object.values(pregunta)[0]}</h2></div>
            </div>)}
            {pregunta && pregunta.Respuestas && (<div className="container respuestas">
                <ul>
                    {pregunta.Respuestas.map((item, index) =>{
                        return (
                            <li style={respuestaSeleccionada ? { pointerEvents: 'none' } : {}} key={index} onClick={() => resolve(index, item)} className={`my-2 ${clases[index]}`} ><b>{Object.keys(item)[0]}:</b> {Object.values(item)[0]}</li>
                        )
                    })}
                </ul>
                <div><button className="btn btn-primary mt-5" onClick={handlePregunta}>Siguiente</button></div>
            </div>)}
            
        </>
        
    )

}
