import TodoItem from "./TodoItem.tsx";
import {useFilteredTodos} from "../hooks/useFiltereredTodo.ts";
import {useLoaderData} from "react-router-dom";
import type {Todo} from "../types/Todo.ts";

export default function TodoList() {
    const todos  = useFilteredTodos();
    const todosRes = useLoaderData<Todo[]>();
    return (
        <>
            {
                todos.length === 0 ? <div>no todo's found</div> :
                todos.map((todo) => {
                    return <ul key={todo.id}><TodoItem todo={todo} /></ul>
            })
            }
            <div className={"margin: 20px"}>Fetched Data</div>
            {
                todosRes?.length === 0 ?
                    <div>no todos found</div> :
                    todosRes?.map((todo) => <li key={todo.id}>{todo.text}</li>)
            }
        </>
    )
}