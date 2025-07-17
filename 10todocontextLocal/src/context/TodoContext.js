import { createContext,useContext } from "react";

export const TodoContext = createContext({
  todos:[
    {
      id: 1,
      todo: "Todo msg",
      completed: false
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id,todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
  //always we have to give a context with the useContext functionality
}

export const TodoProvider = TodoContext.Provider