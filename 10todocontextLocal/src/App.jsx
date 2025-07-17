import { useEffect, useState } from 'react'
import {TodoContext,TodoProvider,useTodo} from './context/index.js'
import TodoForm from './components/TodoForm.jsx'
import './App.css'
import TodoItem from './components/TodoItem.jsx'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev,{id:Date.now(),...todo}])
  }

  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo: prevTodo)));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => (todo.id !== id)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed}:prevTodo))
  }

  //whenever we are talking about react we can easily go for the use of the 
  //LocalStorage in browser 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[])//first it becomes necessary to do getItem and then after that we can actually do set
  //whenever todos get changed by the context api we need to store it in Local Storage

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])


  return (
    <TodoProvider value = {{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo) => (
                    <div key = {todo.id}
                      className='w-full'
                    >
                      <TodoItem todo = {todo} />

                    </div>
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
