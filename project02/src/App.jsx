import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Debarima",
    age:21
  }

  return (
    <>
    <h1 className='bg-green-600 text-black rounded-xl'  
    > tailwind test</h1>
    <Card username="chai aur code" someobj={myObj}/>
    <Card/>
      
     </>
  )
}



   
  


export default App
