import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(15)
  
 
 const addValue=()=>{
  setCounter(counter+1)
}
 const removeValue=()=>{
  if (counter===0)
  {
    alert("no more decrement")
    return;
  }
  else
  {
  setCounter(counter-1)
  }
}

  return (
    <>
    <h1>hello world</h1>
    <h2>counter value {counter}</h2>
    <button onClick={addValue}>add value{counter}</button>
    <br/>
   
    <button onClick={removeValue}>down value{counter}</button>
    </>
  )
}

export default App
