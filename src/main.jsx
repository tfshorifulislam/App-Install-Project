import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './Pages/HomePage/HomePage'
import MainPage from './mainPage/MainPage'
import AppsPage from './Pages/AppsPage/AppsPage'
import InstallationPage from './Pages/InstallationPage/InstallationPage'

const route = createBrowserRouter([
  {
    path: '/', element: <MainPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/apps', element: <AppsPage /> },
      { path: '/installation', element: <InstallationPage /> }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
