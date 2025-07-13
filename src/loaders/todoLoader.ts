import axios from "axios";
import type {Todo} from "../types/Todo.ts";


export async function todoLoader() : Promise<Todo[] | undefined> {
    try{
        //const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const res = await axios.get("http://localhost:8080/todos");
        console.log(res.data);
        if(res.status === 200) {
            return res.data as Todo[];
        } else {
            return [];
        }
    }catch(error) {
        throw new Error("failed to load todos");
    }
}