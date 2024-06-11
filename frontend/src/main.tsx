import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// page components
import Resume from '~/pages/resume/Resume.tsx'
import Home from '~/pages/home/Home.tsx'
import Skills from '~/pages/skills/Skills.tsx'
import Contact from '~/pages/contact/Contact.tsx'

// import global styles
import './styles/main.scss'

// components
import Root from './Root.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
