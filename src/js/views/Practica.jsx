import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/home.css"

export const Practica = () => {

    const { store, actions } = useContext(Context)

    const [pregunta, setPregunta] = useState({})
    const [clases, setClases] = useState(["", "", "", ""])
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(false)
    const [count, setCount] = useState(0)

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
        if (count % 4 == 0 && store.preguntasFalladas.length > 0) {
            const random = Math.floor(Math.random() * (store.preguntasFalladas.length))
            const numPreguntaRandom = store.preguntasFalladas[random]
            const preguntaRandom = store.preguntas[numPreguntaRandom - 1]
            setPregunta(preguntaRandom)
            /* store.preguntasFalladas.splice(random, 1)
            localStorage.setItem("fallos", JSON.stringify(store.preguntasFalladas)) */
        }
        else {
            const random = Math.floor(Math.random() * (store.preguntas.length))
            const preguntaRandom = store.preguntas[random]
            setPregunta(preguntaRandom)
        }
        setCount((prevState) => prevState + 1)
    }

    const resolve = (index, item) => {
        const nuevasClases = [...clases]
        if (item.correct === true) {
            nuevasClases[index] = "success"
            const falladasFiltered = store.preguntasFalladas.filter(i => i != Object.keys(pregunta)[0])
            store.preguntasFalladas = falladasFiltered
            localStorage.setItem("fallos", JSON.stringify(store.preguntasFalladas))
            console.log(store.preguntasFalladas)

        }
        else {
            nuevasClases[index] = "wrong"
            pregunta.Respuestas.map((resp, indx) => {
                if (resp.correct === true) {
                    nuevasClases[indx] = "success"
                }
            })
        }
        setClases(nuevasClases)
        setRespuestaSeleccionada(true)
    }


    return (
        <>
            {pregunta && (<div className="container my-5 enunciado">
                <div className="num me-3"><h1>{Object.keys(pregunta)[0]}:</h1></div>
                <div className="pregunta"><h2>{Object.values(pregunta)[0]}</h2></div>
            </div>)}
            {pregunta && pregunta.Respuestas && (<div className="container respuestas">
                <ul>
                    {pregunta.Respuestas.map((item, index) => {
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
