import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className=" max-w-7xl w-full mx-auto">
        <RouterProvider router={Router} />
      </div>
    </Provider>
  </React.StrictMode>,
)
