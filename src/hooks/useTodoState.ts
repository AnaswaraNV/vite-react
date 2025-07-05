import {useDispatch, useSelector} from "react-redux";
import type {RootState, RootDispatch} from "../redux/store.ts";
import type {Filter} from "../types/Todo.ts";
import {addTodo, deleteTodo, setFilter, toggleTodo} from "../redux/slices/todoReducer.ts";

export function useTodoState() {
    const {todos, filter} = useSelector((state: RootState) => state); //grabs the entire state and destructure
    const dispatch = useDispatch<RootDispatch>();

    return {
        todos,
        filter,
        add: (text: string) => dispatch(addTodo(text)),
        remove: (id: number) => dispatch(deleteTodo(id)),
        toggle: (id: number) => dispatch(toggleTodo(id)),
        changeFilter: (filter: Filter) => dispatch(setFilter(filter)),
    }

}