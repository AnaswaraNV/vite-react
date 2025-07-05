import type {AppState, Filter} from "../types/Todo.ts";
import {ADD_TODO, DELETE_TODO, SET_FILTER, TOGGLE_TODO} from "./actions.ts";

const savedTodos: [] = JSON.parse(localStorage.getItem('todos') || '[]');

const initialState: AppState = {
    todos: savedTodos,
    filter: 'ALL'
}

//type of action which will have the name of action and payload
type Action =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'DELETE_TODO', payload: number }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'SET_FILTER', payload: Filter }


//pure function which takes the state wth initial state and the action
// object which will have type and the payload
export function rootReducers(state = initialState, action: Action): AppState  {
    switch (action.type) {
        case ADD_TODO:
            const newTodos = [
                ...state.todos,
                {id: Date.now(), text: action.payload, completed: false},
            ];
            localStorage.setItem('todos', JSON.stringify(newTodos))
            return {
                ...state,
                todos: newTodos
            }
        case TOGGLE_TODO:
            //iterate through todos and if payload id same as todo id change completed status
            const toggled = state.todos.map(todo =>
                action.payload === todo.id ? {...todo, completed: !todo.completed} : todo
            );
            localStorage.setItem('todos', JSON.stringify(toggled));
            return {
                ...state,
                todos: toggled
            };
        case DELETE_TODO:
            const deleted = state.todos.filter(todo => action.payload != todo.id);
            localStorage.setItem('todos', JSON.stringify(deleted));
            return {
                ...state,
                todos: deleted
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        default: return {...state};
    }
}