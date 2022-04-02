import {Action, ActionCreator} from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";
import {buscarPersonajesAPI} from "../services/personaje.services";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

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

// worker Saga: Se va a ejecutar en cada action: BUSCAR_PERSONAJES
function* buscarPersonajesWorker(action: BuscarPersonajesAction) {
    try {
        const personajes: Personaje[] = yield call( buscarPersonajesAPI, action.name);
        yield put(buscarPersonajesExito(personajes));
    } catch (e: any) {
        yield put(buscarPersonajesError(e.message));
    }
}

// /*
//   Comienza el buscarPersonajesWorker en cada accion `BUSCAR_PERSONAJES` despachada.
//   Permite llamadas en simultaneo.
// */
// function* buscarPersonajesSaga() {
//     yield takeEvery("BUSCAR_PERSONAJES", buscarPersonajesWorker);
// }

/*
  Alternativamente se puede usar takeLatest.

  No permite llamadas en simultaneo. Si "BUSCAR_PERSONAJES" se despacha mientras un fetch esta siendo ejecutado, ese pending fetch es cancelado
  y solo se ejecuta el último
*/
function* buscarPersonajesSaga() {
    yield takeLatest("BUSCAR_PERSONAJES", buscarPersonajesWorker);
}

export default buscarPersonajesSaga;