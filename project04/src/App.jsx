import { useEffect } from 'react';
import { useState } from 'react'
import { useCallback,useRef } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [num,setNum]=useState(false);
  const [char,setChar]=useState(false);
  const [pass,setPass]=useState("")
  //useref
  const passwordref=useRef(null)
  const passwordgenerator=useCallback(()=>{//to optimize code
    
    let pass=""
    let str=" ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num)
      str+="0123456789"
    if(char)
      str+="+-?/><{}[]\|%$#&*@!"
    for (let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()* str.length + 1)
   
   pass+=str.charAt(char) 
  }
   setPass(pass)

  },[length,num,char,setPass]
  )
  const copyPasstoClip=useCallback(()=>{// useCallback help to memorize the part as much as they can
    passwordref.current?.select();//all value will be highlighted
    passwordref.current?.setSelectionRange(0,101)//only 100 value will be highlighted

    window.navigator.clipboard.writeText(pass)
  },[pass])//to copy the password
  useEffect(()=>{
    passwordgenerator()
  },[length,num,setPass,char])//pass cannot be written there because if pass 
  // then password will be generated every time we will run in infinite loop so password will change if 
  // setpass will be called

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-10 my-8 text-red-800 bg-gray-400 py-6'>
      <h1 className='text-black text-center my-3'> password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={pass}
        className='outline-none w-full py-3 px-3
        'placeholder='password'//written in the box
        readOnly
        ref={passwordref}
        />
        <button onClick={copyPasstoClip} className='outline-none bg-blue-600 text-white px-8 py-3 shrink-0'> copy </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"//give the range box
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}//value is changing by passing an event
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"//provide check box
          defaultChecked={num}
          id="numberInput"
          onChange={()=>{
            setNum((prev)=>!prev);// reversing previous value if true then false if false then true
          }}
          
          
          />
          <label htmlFor='numberInput'>Numbers</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"//provide check box
          defaultChecked={num}
          id="charInput"
          onChange={()=>{
            setChar((prev)=>!prev);// reversing previous value if true then false if false then true
          }}
          
          
          />
          <label htmlFor='charInput'>Character</label>

        </div>

      </div>
     </div>
    </>
  )
}

export default App
