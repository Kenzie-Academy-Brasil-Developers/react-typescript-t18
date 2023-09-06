import { useContext } from "react";
import { TodoCard } from "./TodoCard";
import { TodoContext } from "../../providers/TodoContext/TodoContext";

export const TodoList = () => {
   const { todoList } = useContext(TodoContext);
   
   return (
      <ul>
         {todoList.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
         ))}
      </ul>
   );
};
