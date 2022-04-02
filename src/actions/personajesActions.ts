import {Action, ActionCreator} from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";

export interface BuscarPersonajesAction extends Action{
    type: "BUSCAR_PERSONAJES",
    name: string
}

export interface BuscarPersonajesExitoAction extends Action{
    type: "BUSCAR_PERSONAJES_EXITO",
    personajes: Personaje[]
}

export interface BuscarPersonajesErrorAction extends Action{
    type: "BUSCAR_PERSONAJES_ERROR",
    error: string
}

export type PersonajesAction = BuscarPersonajesAction | BuscarPersonajesExitoAction | BuscarPersonajesErrorAction;

export const buscarPersonajes:ActionCreator<BuscarPersonajesAction> = (name: string) => {
    return {
        type: "BUSCAR_PERSONAJES",
        name: name
    }
}

export const buscarPersonajesExito:ActionCreator<BuscarPersonajesExitoAction> = (personajes: Personaje[]) => {
    return {
        type: "BUSCAR_PERSONAJES_EXITO",
        personajes: personajes
    }
}

export const buscarPersonajesError:ActionCreator<BuscarPersonajesErrorAction> = (error: string) => {
    return {
        type: "BUSCAR_PERSONAJES_ERROR",
        error: error
    }
}





