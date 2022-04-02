import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {buscarPersonajes} from "../actions/personajesActions";

const MINIMUM_CHARS_TO_SEARCH = 3;

const Buscador:FC = () => {

    const dispatch = useDispatch();
    const onChange = async (text: string): Promise<void> => {
        if (text.length < MINIMUM_CHARS_TO_SEARCH) return;
        dispatch(buscarPersonajes(text));
    }

    return <div className="App-table">
        <div>
            <label>Buscar por Nombre: </label>
            <input type="text" onChange={(e)=>  onChange(e.target.value)}
                   placeholder="Rick, Morty, etc" autoFocus={true}/>
        </div>
    </div>
}

export default Buscador;