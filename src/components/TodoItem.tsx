import {useTodoState} from "../hooks/useTodoState.ts";
import type {Todo} from "../types/Todo.ts";

export default function TodoItem ({todo}: {todo: Todo}) {
    const { toggle, remove } = useTodoState();
    return <>
            <li key={todo.id}>
                    <input type="checkbox"
                           checked={todo.completed}
                           onChange={() => toggle(todo.id)}>
                    </input>
                    <span className={todo.completed? "text-green": ""}>{todo.text}</span>
                    <button onClick={() => remove(todo.id)}>
                        Remove
                    </button>
            </li>
    </>
}