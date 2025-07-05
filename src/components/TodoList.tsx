import TodoItem from "./TodoItem.tsx";
import {useFilteredTodos} from "../hooks/useFiltereredTodo.ts";

export default function TodoList() {
    const todos  = useFilteredTodos();

    return (
        <>
            {
                todos.length === 0 ? <div>no todo's found</div> :
                todos.map((todo) => {
                    return <ul key={todo.id}><TodoItem todo={todo} /></ul>
            })
            }
        </>
    )
}