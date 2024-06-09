import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  const[todo,setTodo]=useState('')
  const[todos,setTodos]=useState([])

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input  value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i    onClick={()=>setTodos([...todos,{id:Date.now(),text:todo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">

        {todos.map((val)=>{
             return(
              <div className="todo">
              <div className="left">
                <input onChange={
                   (e)=>{
                      setTodos(todos.filter((obj)=>{
                        console.log(e.target.value)
                        if(obj.id===val.id){
                          obj.status=e.target.checked
                        }
                        return obj
                      })) 
                   }

                } value={val.status} type="checkbox" name="" id="" />
                <p>{val.text}</p>
              </div>
              <div className="right">
                <i   onClick={((e)=>{
                  setTodos(todos.filter((obj)=>{
                    let ele= obj.id!==val.id
                    console.log(ele)
                    return ele
                  }))
                })} className="fas fa-times"></i>
              </div>
            </div>
             )
        })}

        {
          todos.map((e)=>{
            if(e.status===true){
              return  <h1>{e.text}</h1>
            }
          })
        }
        
      </div>
    </div>
  );
}

export default App;
