import {combineReducers} from "@reduxjs/toolkit";
import personajesReducer from "../reducers/personajesReducer";
import { createStore, compose } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";

const rootReducer = combineReducers({
    personajes: personajesReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer, composeEnhancers()
)