import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {buscarPersonajes} from "../actions/personajesActions";

const Buscador:FC = () => {

    // No olvidemos agregar el hook de redux para obtener el acceso al objeto dispatch
    const dispatch = useDispatch();

    return <div className="App-table">
        <div>
            <label>Buscar por Nombre: </label>
            <input type="text" onChange={(e)=>  dispatch(buscarPersonajes(e.target.value))}
                   placeholder="Rick, Morty, etc" autoFocus={true}/>
        </div>
    </div>
}

export default Buscador;