import {useState} from "react";
import {useTodoState} from "../hooks/useTodoState.ts";

export default function TodoInput() {
    const [text, setText] = useState("");
    const { add } = useTodoState();

    const handleAdd = () => {
        if (text) add(text);
        setText('');
    }
    return (
        <div className="row">
            <input className="col-md-6"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}/>
            <button className="col-md-6" onClick={handleAdd}>
                Add
            </button>
        </div>
    )
}