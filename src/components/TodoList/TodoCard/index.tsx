import { ITodo } from "../../../interfaces/todo";

interface ITodoCardProps{
    todo: ITodo;
    removeTodo: (removingId: string) => void;
}

export const TodoCard = ({ todo, removeTodo }: ITodoCardProps) => {
    return(
        <li>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <button onClick={() => removeTodo(todo.id)}>Excluir</button>
        </li>
    )
}