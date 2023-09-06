import { TodoCreateForm } from "../../components/TodoCreateForm"
import { TodoList } from "../../components/TodoList"

// O typescript é uma linguagem descritiva, ele basicamente apenas descreve o que já está acontecendo no Javascript

export const HomePage = () => {  
    return(
        <main>
            <h1>Home Page</h1>
            <TodoCreateForm />
            <TodoList />
        </main>
    )
}