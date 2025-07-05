import type {Filter} from "../types/Todo.ts";

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: text
})

export const deleteTodo = (id: number) => ({
    type: DELETE_TODO,
    payload: id
})

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
})

export const setFilter = (filter: Filter) => ({
    type: SET_FILTER,
    payload: filter
})