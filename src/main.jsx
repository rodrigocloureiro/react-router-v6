import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 1 - Configurando router

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './routes/Home'
import Contact from './routes/Contact'
import ErrorPage from './routes/ErrorPage'
import ContactDetails from './routes/ContactDetails'

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Home />,
//     },
    
//     {
//       path: '/contact',
//       element: <Contact />
//     },
//   ]
// );

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      // 3 - Página de Erro
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        // 5 - Rotas aninhadas ( nested routes ) | dynamic routes ( rotas dinâmicas )
        {
          path: '/contact/:id',
          element: <ContactDetails />,
        },
        // 7 - Navigate para páginas não existentes
        {
          path: 'oldcontact',
          element: <Navigate to='/contact' />,
        }
      ]
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <App /> */}

    <RouterProvider router={ router } />

  </React.StrictMode>,
)
