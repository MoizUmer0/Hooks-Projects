import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import { Home } from './components/Home/Home.jsx'
import { Cart } from './components/Cart/Cart.jsx'
import {Provider} from 'react-redux'
import store from './app/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='cart' element={<Cart/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
