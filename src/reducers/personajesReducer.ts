import {Reducer} from "@reduxjs/toolkit";
import {PersonajesAction} from "../actions/personajesActions";
import Personaje from "../types/personaje.types";

export interface PersonajesState{
    busqueda: string;
    personajes: Personaje[];
    status: "CARGANDO" | "COMPLETADO" | "COMPLETADO_CON_ERROR";
    error: string | null; 
}

const initialState: PersonajesState = {
    busqueda: '',
    personajes: [],
    status: "COMPLETADO",
    error: null
};

const personajesReducer:Reducer<PersonajesState, PersonajesAction> =
    (state = initialState, action): PersonajesState => {
    switch(action.type){
        case "BUSCAR_PERSONAJES":
            return {
                ...state,
                busqueda: action.name,
                status: "CARGANDO",
                error: null
            }
        case "BUSCAR_PERSONAJES_EXITO":
            return {
                ...state,
                status: "COMPLETADO",
                personajes: action.personajes
            }
        case "BUSCAR_PERSONAJES_ERROR": 
            return {
                ...state,
                status: "COMPLETADO_CON_ERROR",
                personajes: [], // opcional
                error: action.error
            }
        default:
            return state;
    }
}
export default personajesReducer;