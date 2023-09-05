import { useState } from "react";
import { ITodoFormData } from "../../interfaces/todo";

interface ITodoCreateFormProps{
    addTodo: (formData: ITodoFormData) => void;
}

export const TodoCreateForm = ({addTodo}: ITodoCreateFormProps) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo({ title, content});
        setTitle("");
        setContent("");
    }

    return(
        <form onSubmit={submit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button type="submit">Cadastrar nota</button>
        </form>
    )
}