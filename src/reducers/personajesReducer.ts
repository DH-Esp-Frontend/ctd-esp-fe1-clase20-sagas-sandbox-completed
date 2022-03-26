import {Reducer} from "@reduxjs/toolkit";
import {PersonajesAction} from "../actions/personajesActions";

export interface PersonajesState{
    busqueda: string;
}

const initialState: PersonajesState = {
    busqueda: '',
};

const personajesReducer:Reducer<PersonajesState, PersonajesAction> =
    (state = initialState, action): PersonajesState => {
    switch(action.type){
        case "BUSCAR_PERSONAJES":
            return {
                ...state,
                busqueda: action.name
            }
        default:
            return state;
    }
}
export default personajesReducer;