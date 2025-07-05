import {legacy_createStore} from "redux";
import {rootReducers} from "./reducers.ts";

export const store = legacy_createStore(rootReducers);
export type RootState = ReturnType<typeof rootReducers>;