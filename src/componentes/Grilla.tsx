import React, {FC, useState} from "react";
import Personaje from "../types/personaje.types";
import {buscarPersonajes} from "../services/personaje.services";
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import {IRootState} from "../store/store";
import {useQuery} from "react-query";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

const Grilla:FC = () => {

    const buscador = useSelector(state => state.personajes.busqueda)
    const [personajes, setPersonajes] = useState<Personaje[]>([]);
    useQuery<Personaje[]>(["buscarPersonajes",buscador],
        () => buscarPersonajes(buscador),
        {
            onSuccess: (data:Personaje[]) => {
                setPersonajes(data);
            }
        }
    )

    if (personajes.length === 0) return <></>

    return <div className="App-table" style={{marginTop: 50}}>
        {personajes.map((personaje) => {
            return ( <div style={{display: "flex", flexDirection: "column", alignItems:"center", marginBottom: "20px"}}>
                <label style={{marginBottom: 5}}>Nombre: {personaje.name}</label>
                <img src={personaje.image} alt={personaje.name}/>
            </div>)
        })}
    </div>
}

export default Grilla;