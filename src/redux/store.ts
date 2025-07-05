import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './slices/todoReducer.ts'
export const store = configureStore({
    reducer: todoReducer
});
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;