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
import CoffeeCard from './Components/CoffeCard/CoffeeCard.jsx';
import IcedCoffee from './Components/IcedCoffee/IcedCoffee.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('../categories.json'),
        children:[
          {
            path:`/coffee/:category`,
            element:<CoffeeCard></CoffeeCard>,
            loader:()=>fetch('../coffees.json')
            
          }

        ]
      },
      {
        path:"coffes",
        element:<Coffes></Coffes>,
        loader:()=>fetch('../coffees.json')
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
