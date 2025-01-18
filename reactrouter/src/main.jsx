import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './components/about/about'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import User from './components/user/User'
import Github from './components/github/Github'
//import App from './App.jsx'
// const router=createBrowserRouter([{// creating an object
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:'/',
//       element:<Home/>
//     },
//     {
//       path:'about',
//       element:<About/>
//     },
//     {
//       path:'contact',
//       element:<Contact/>

//     }
//   ]
// }])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
