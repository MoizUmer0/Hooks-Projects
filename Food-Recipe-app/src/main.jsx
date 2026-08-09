import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Layout } from './layout.jsx'
import Home from './components/Home/Home.jsx'
import Details from './components/Details/Details.jsx'
import Favourite from './components/Favourite/Favourite.jsx'
import Header from './components/Header/Header.jsx'
import { UserContextProvider } from './components/context/UserContext/userContext.jsx'

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='details/:id' element={<Details/>}/>
    <Route path='favourite' element={<Favourite/>}/>
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router}/>
    </UserContextProvider>
  </StrictMode>,
)
