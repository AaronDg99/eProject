import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CafeProvider } from './context/cafeProvider'
import router from './router'
import './index.css'
//con RouterProvider Obtenemos los componentes que almacena el mismo
//se debe de importar ReactDom y RouterProvider previamente
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CafeProvider>
    <RouterProvider router={router} />
    </CafeProvider>
  </React.StrictMode>,
)
