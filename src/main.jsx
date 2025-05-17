import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Coffes from './Components/Coffes/Coffes.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('categories.json')
      },
      {
        path:"coffes",
        element:<Coffes></Coffes>
      },
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
