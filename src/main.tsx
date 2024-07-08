import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './components/layout/mainLayout/MainLayout'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className=" max-w-7xl w-full mx-auto">
      <RouterProvider router={Router} />
      <MainLayout />
    </div>
  </React.StrictMode>,
)
