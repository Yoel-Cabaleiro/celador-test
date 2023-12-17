import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/home.css"

export const Examen = () => {

    const { store, actions } = useContext(Context)

    const [listaPreguntas, setListaPreguntas] = useState([])
    const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState({})
    const [resultado, setResultado] = useState("?")
    const [corregido, setCorregido] = useState(false)


    useEffect(() => {
        const randomIndexes = new Set()
        while (randomIndexes.size < 50) {
            const randomIndex = Math.floor(Math.random() * store.preguntas.length)
            randomIndexes.add(randomIndex)
        }
        const finalList = Array.from(randomIndexes).map(item => store.preguntas[item])
        setListaPreguntas(finalList)
    }, [])


    const handleSelected = (e, preguntaIndex, respuestaIndex) => {
        if (respuestasSeleccionadas[preguntaIndex] !== respuestaIndex) {
            setRespuestasSeleccionadas({ ...respuestasSeleccionadas, [preguntaIndex]: respuestaIndex })
        } else {
            const updatedRespuestasSeleccionadas = { ...respuestasSeleccionadas }
            delete updatedRespuestasSeleccionadas[preguntaIndex]
            setRespuestasSeleccionadas(updatedRespuestasSeleccionadas)
        }
    };

    const handleClass = (item, index, indx) => {
        if (corregido) {
            const respuestaCorrectaIndex = item.Respuestas.findIndex(resp => resp.correct === true);
            if (respuestaCorrectaIndex === indx) {
                return "my-2 success";
            } else if (respuestasSeleccionadas[index] === indx) {
                return "my-2 wrong";
            }
        } else {
            if (respuestasSeleccionadas[index] === indx) {
                return "my-2 selected";
            }
        }
        return "my-2"
    };


    const evaluate = () => {
        let count = 0
        let preguntasAcertadas = {}
        if (Object.keys(respuestasSeleccionadas).length < listaPreguntas.length) {
            alert("Completa el examen, selecciona una respuesta para cada pregunta")

        } else {
            Object.keys(respuestasSeleccionadas).map((key) => {
                if (listaPreguntas[key].Respuestas[respuestasSeleccionadas[key]].correct === true) {
                    count += 1
                    preguntasAcertadas[listaPreguntas[key]] = respuestasSeleccionadas[key]
                }
            })
            let total = ((count * 100) / 50) / 10
            setResultado(total)
            setCorregido(true)
        }
    }


    return (
        <>
            {listaPreguntas && (<div className="container examen">
                {listaPreguntas.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="container preguntas mt-5 mb-4 col-12 enunciado">
                                <div className="num me-3"><h1>{index + 1}:</h1></div>
                                <div className="pregunta"><h2>{Object.values(item)[0]}</h2></div>
                            </div>
                            <ul className="pb-5">
                                {item.Respuestas.map((resp, indx) => {
                                    return (
                                        <li style={corregido ? { pointerEvents: 'none' } : {}} key={indx} onClick={(e) => handleSelected(e, index, indx)} className={handleClass(item, index, indx)} ><b>{Object.keys(resp)[0]}:</b> {Object.values(resp)[0]}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
                <div className="fin-examen">
                    <button onClick={evaluate} className="btn btn-primary">Corregir</button>
                    <div className="resultado"><h1>Nota final: {resultado} / 10</h1></div>
                </div>

            </div>)}
        </>
    )
}
