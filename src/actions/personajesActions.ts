import {Action, ActionCreator} from "@reduxjs/toolkit";

export interface BuscarPersonajesAction extends Action{
    type: "BUSCAR_PERSONAJES",
    name: string
}

export const buscarPersonajes:ActionCreator<BuscarPersonajesAction> = (name: string) => {
    return {
        type: "BUSCAR_PERSONAJES",
        name: name
    }
}

export type PersonajesAction =
    | ReturnType<typeof buscarPersonajes>
