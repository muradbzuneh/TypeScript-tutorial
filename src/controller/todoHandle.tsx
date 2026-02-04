import {useState} from 'react'
import type { Todo } from "../data/todo"
import { todoitem } from "../data/todo"

const TodoHandle = () => {
     const [newInput, setNewInput] = useState<string>("")
  const [newTodo, setNewTodo] = useState<Todo[]>(todoitem)

  const HandleInput =((e:React.ChangeEvent<HTMLInputElement>) =>{
setNewInput(e.target.value)
  }
)
const HandleAddTodo =()=>{
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
const Checkboxed =(id:number)=>{
   setNewTodo(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
        )
      )
}
const handleTrash =(id:number)=>{
    setNewTodo(prev =>
    prev.filter(todo =>todo.id !== id)
    )

}
  return (
     <div className=" w-100 m-10 p-10 bg-blue-100  items-center  my-100 rounded-md ">
      <div className='b'>
       <h1 className="text-3xl font-bold font-serif text-blue-950 "> YOUR TO DO</h1>
      </div>
      <div className="flex columns-xs mx-4 py-6 space-x-4 w-full">
        <input type="text"
        className="w-4/5 border-spacing-2 rounded-md p-2 text-blue-950 outline-2 outline-offset-2 outline-cyan-500 border-none font-serif"
        value={newInput} 
        onChange={HandleInput}
        placeholder="Enter u want todo"/>
        <button className="rounded-md border-spacing-2 bg-cyan-400 p-3 hover:bg-blue-400"
        onClick={HandleAddTodo}> 
        Add</button>
      </div>
      <div>
        {newTodo.map((item)=>(
            <>
            
          <div key={item.id} className="bg-transparent flex mx-4 py-5 px-14 items-center justify-between rounded-lg">
          <input type="checkbox" className="h-10 rounded-lg size-6" 
          checked ={item.completed}
          onChange={()=>Checkboxed(item.id)}/>
         <p
            className={`text-lg ${
                    item.completed ? "line-through text-gray-400" : ""
                  } font-serif font-normal text-blue-950` } 
                >
                  {item.Title}
                </p>
        
              <button
                onClick={() => handleTrash(item.id)}
                className="text-red-500 hover:text-red-700 text-xl rounded-xl size-6"
              >
                ❌
              </button>
        
          </div>
         <hr className=" border-black h-1" />
         </>
        ))}
      </div>
    </div>
  )
}

export default TodoHandle 