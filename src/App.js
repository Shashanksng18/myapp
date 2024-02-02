import React from "react";
import ViewHeight from "./components/ViewHeight";
import ViewMax from "./components/ViewMax";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllPage from "./components/AllPage";
import ErrorPage from "./components/ErrorPage";
import Percentage from "./components/Percentage";
import Vmax from "./components/Vmax";
import ViewWidth from "./components/ViewWidth";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AllPage/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/vh",
      element: <ViewHeight/>,
      errorElement: <ErrorPage/>
    },
    // {
    //   path: "/vw",
    //   element: <ViewWidth/>,
    // },
    {
      path: "/vmax",
      element: <Vmax/>
    },
    {
      path: "/vm",
      element: <ViewMax/>,
      errorElement: <ErrorPage/>
    }, {
      path: "/pvsv",
      element: <Percentage/>
    }
  ])
  return(
    <RouterProvider router={router}/>
  )
}

export default App;