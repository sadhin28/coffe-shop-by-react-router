import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
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

export default router;