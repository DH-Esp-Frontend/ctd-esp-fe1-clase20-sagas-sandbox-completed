import Personaje from "../types/personaje.types";
import {Action, ActionCreator} from "@reduxjs/toolkit";

export interface BuscarPersonajesSuccessAction extends Action{
    type: "BUSCAR_PERSONAJES_SUCCESS",
    personajes: Personaje[]
}

export interface BuscarPersonajesAction extends Action{
    type: "BUSCAR_PERSONAJES",
    name: string
}

export const buscarPersonajesSuccess:ActionCreator<BuscarPersonajesSuccessAction> = (personajes: Personaje[]) => {
    return {
        type: "BUSCAR_PERSONAJES_SUCCESS",
        personajes: personajes
    }
}

export const buscarPersonajes:ActionCreator<BuscarPersonajesAction> = (name: string) => {
    return {
        type: "BUSCAR_PERSONAJES",
        name: name
    }
}

export type PersonajesAction =
    | ReturnType<typeof buscarPersonajes>
    | ReturnType<typeof buscarPersonajesSuccess>
