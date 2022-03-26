import Personaje from "../types/personaje.types";
import {Reducer} from "@reduxjs/toolkit";
import {PersonajesAction} from "../actions/personajesActions";

export interface PersonajesState{
    busqueda: string;
    personajes: Personaje[];
}

const initialState: PersonajesState = {
    busqueda: '',
    personajes: []
};

const personajesReducer:Reducer<PersonajesState, PersonajesAction> =
    (state = initialState, action): PersonajesState => {
    switch(action.type){
        case "BUSCAR_PERSONAJES":
            return {
                ...state,
                busqueda: action.name
            }
        case "BUSCAR_PERSONAJES_SUCCESS":
            return {
                ...state,
                personajes: [...action.personajes]
            }
        default:
            return state;
    }
}
export default personajesReducer;