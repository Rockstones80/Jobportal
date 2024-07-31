import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUpPage from './auth/create-account/index.jsx'
import SignInPage from './auth/sign-in/index.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'auth/sign-in',
    element:<SignInPage/>
  },
  {
    path:'auth/create-account',
    element:<SignUpPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      
    </RouterProvider>
  </React.StrictMode>,
)
