import { SubmitHandler, useForm } from "react-hook-form";
import { TCreateTodoFormValues, createTodoFormSchema } from "./createTodoFormSchema";
import { Input } from "../form/Input";
import { Textarea } from "../form/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext/TodoContext";
export const TodoCreateForm = () => {
    const { addTodo } = useContext(TodoContext);

    const { register, handleSubmit, formState: { errors }, reset} = useForm<TCreateTodoFormValues>({
        resolver: zodResolver(createTodoFormSchema)
    });
   
    const submit: SubmitHandler<TCreateTodoFormValues> = (formData) => {
        addTodo(formData);
        reset();
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input type="text" {...register("title")} error={errors.title}/>
            <Textarea {...register("content")} error={errors.content} />
            <button type="submit">Cadastrar nota</button>
        </form>
    )
}