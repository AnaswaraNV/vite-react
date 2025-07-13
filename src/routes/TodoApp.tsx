import TodoInput from "../components/TodoInput.tsx";
import FilterTabs from "../components/FilterTabs.tsx";
import TodoList from "../components/TodoList.tsx";

export function TodoApp() {
    return (
        <>
            <TodoInput/>
            <FilterTabs/>
            <TodoList/>
        </>
    )
}