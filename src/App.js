 import React,{useState,useEffect} from "react"
 import TodoForm from "./Components/TodoForm"
import Todoss from "./Components/Todo"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


function App() {
  const[Todos,setTodos]=useState([])
  useEffect(()=>{
   const localTodos=localStorage.getItem("Todos")
   if(localTodos)
     setTodos(JSON.parse(localTodos))
  },[])
  useEffect(()=>{

    localStorage.setItem("Todos",JSON.stringify(Todos))


 },[Todos])

  const addTodo=async (Todo)=>{
    setTodos([...Todos,Todo])

  }
  const markComplete=async (id)=>{

    
    setTodos(Todos.filter(Todo=>(
        Todo.id!==id
    )
))

  }
  





  
  return (
     <div>
       <h1>
         The Local Storage Todo App
       </h1>
       <Todoss todo={Todos} markComplete={markComplete} /> 
       <TodoForm addTodo={addTodo}/>
      
       </div>
  );
}

export default App;
