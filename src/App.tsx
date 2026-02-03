import { useState } from "react"
import type { Todo } from "./data/todo"
import { todoitem } from "./data/todo"
function App() {

  const [newInput, setNewInput] = useState<string>("")
  const [newTodo, setNewTodo] = useState<Todo[]>(todoitem)

  const handleInput =((e:React.ChangeEvent<HTMLInputElement>) =>{
setNewInput(e.target.value)
  }
)
const handleAddTodo =()=>{
  if(!newInput.trim())
    return
  const newTodo:Todo ={
    id: Date.now(),
    Title:newInput,
    completed:false
  }
  setNewTodo(prev =>[...prev, newTodo])
  setNewInput("");
}
const checkboxed =(id:number)=>{
   setNewTodo(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
        )
      )
}


  return (
    <main>
      <div className='bg-red-300'>
       <h1 className="text-3xl font-bold text-blue-500"> YOUR TO DO</h1>
      </div>
      <div className="flex">
        <input type="text"
        value={newInput} 
        onChange={handleInput}
        placeholder="Enter u want todo"/>
        <button 
        onClick={handleAddTodo}> 
        Add</button>
      </div>
      <div>
        {newTodo.map((item)=>(
          <div className="flex">
          <input type="checkbox" 
          checked ={item.completed}
          onChange={()=>checkboxed(item.id)}/>
          <p key={item.id} className="checkbox? line-trogh">{item.Title}</p>
          <img src="./assets/trash.svg" alt="" />
          </div>
       
        ))}
      </div>
    </main>
      
    
    
  )
}

export default App

