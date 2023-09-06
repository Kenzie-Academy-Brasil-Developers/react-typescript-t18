import { HomePage } from "./pages/HomePage";
import { TodoProvider } from "./providers/TodoContext/TodoContext";

function App() {
   return (
      <>
         <TodoProvider>
            <HomePage />
         </TodoProvider>
      </>
   );
}

export default App;
