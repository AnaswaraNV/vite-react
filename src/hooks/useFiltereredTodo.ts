import type {RootState} from "../redux/store.ts";
import {useSelector} from "react-redux";

//This hook returns only the todos that match the current filter, like "ALL", "ACTIVE", or "COMPLETED".
export function useFilteredTodos () {
    const {todos, filter} = useSelector((state: RootState) => state);


    return todos.filter(todo => {
        if (filter == 'ACTIVE') { return !todo.completed }
        if (filter == 'COMPLETED') { return todo.completed}
        return true;
    });
}