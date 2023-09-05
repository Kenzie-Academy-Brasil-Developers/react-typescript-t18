import { ITodo } from "../../interfaces/todo";
import { TodoCard } from "./TodoCard";

interface ITodoListProps {
   todoList: ITodo[];
   removeTodo: (removingId: string) => void;
}

export const TodoList = ({ todoList, removeTodo }: ITodoListProps) => {
   return (
      <ul>
         {todoList.map((todo) => (
            <TodoCard key={todo.id} todo={todo} removeTodo={removeTodo} />
         ))}
      </ul>
   );
};
