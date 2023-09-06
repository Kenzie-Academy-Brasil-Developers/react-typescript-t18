import { useContext } from "react";
import { ITodo } from "../../../interfaces/todo";
import { TodoContext } from "../../../providers/TodoContext/TodoContext";

interface ITodoCardProps{
    todo: ITodo;
}

export const TodoCard = ({ todo }: ITodoCardProps) => {
    const { removeTodo } = useContext(TodoContext);

    return(
        <li>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <button onClick={() => removeTodo(todo.id)}>Excluir</button>
        </li>
    )
}