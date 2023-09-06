import { TCreateTodoFormValues } from "../../components/TodoCreateForm/createTodoFormSchema";
import { ITodo } from "../../interfaces/todo";

export interface ITodoProviderProps{
    children: React.ReactNode;
}

export interface ITodoContext{
    todoList: ITodo[];
    addTodo: (formData: TCreateTodoFormValues) => void;
    removeTodo: (removingId: string) => void;
}
