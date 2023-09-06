import { createContext, useState } from "react";
import { TCreateTodoFormValues } from "../../components/TodoCreateForm/createTodoFormSchema";
import { ITodo } from "../../interfaces/todo";
import { ITodoContext, ITodoProviderProps } from "./@types";

export const TodoContext = createContext({} as ITodoContext);

export const TodoProvider = ({children}: ITodoProviderProps) => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    const addTodo = (formData: TCreateTodoFormValues) => {
        const newTodo = { ...formData, id: crypto.randomUUID() };
        setTodoList([...todoList, newTodo]);
    }
    
    const removeTodo = (removingId: string) => {
        const newTodoList = todoList.filter(todo => todo.id !== removingId);
        setTodoList(newTodoList);
    }

    return(
        <TodoContext.Provider value={{ todoList, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    )
}