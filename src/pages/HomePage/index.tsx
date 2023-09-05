import { useState } from "react"
import { TodoCreateForm } from "../../components/TodoCreateForm"
import { TodoList } from "../../components/TodoList"
import { ITodo, ITodoFormData } from "../../interfaces/todo";

// O typescript é uma linguagem descritiva, ele basicamente apenas descreve o que já está acontecendo no Javascript

export const HomePage = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    const addTodo = (formData: ITodoFormData) => {
        const newTodo = { ...formData, id: crypto.randomUUID() };
        setTodoList([...todoList, newTodo]);
    }
    
    const removeTodo = (removingId: string) => {
        const newTodoList = todoList.filter(todo => todo.id !== removingId);
        setTodoList(newTodoList);
    }

    return(
        <main>
            <h1>Home Page</h1>
            <TodoCreateForm addTodo={addTodo} />
            <TodoList todoList={todoList} removeTodo={removeTodo} />
        </main>
    )
}