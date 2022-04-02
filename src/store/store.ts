import {applyMiddleware, combineReducers} from "@reduxjs/toolkit";
import personajesReducer from "../reducers/personajesReducer";
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import buscarPersonajesSaga from "../actions/personajesActions";
import createSagaMiddleware from "redux-saga";

const rootReducer = combineReducers({
    personajes: personajesReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Levanta los observadores, es decir corre los Sagas
sagaMiddleware.run(buscarPersonajesSaga)