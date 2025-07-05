import type {AppState, Filter, Todo} from "../../types/Todo.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const savedTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

const initialState: AppState = {
    todos: savedTodos,
    filter: 'ALL'
}

const todoReducer= createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodos = [
                ...state.todos,
                {id: Date.now(), text: action.payload, completed: false},
            ];
            state.todos = newTodos;
            localStorage.setItem('todos', JSON.stringify(newTodos))
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            const updated = state.todos.filter(todo => {
                return todo.id !== action.payload;
            });
            state.todos = updated;
            localStorage.setItem('todos', JSON.stringify(updated));
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const toggled = state.todos.map( todo =>
                todo.id === action.payload ? {...todo, completed: !todo.completed}: todo
            )
            localStorage.setItem('todos', JSON.stringify(toggled));
            state.todos = toggled;
        },
        setFilter: (state, action: PayloadAction<Filter>) => {
            state.filter = action.payload as Filter;
        },
    }
});

export const {addTodo, deleteTodo, toggleTodo, setFilter} = todoReducer.actions;
export default todoReducer.reducer;