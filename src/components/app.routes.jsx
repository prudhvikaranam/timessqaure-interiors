import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { BodyComponent } from "./Body";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyComponent />
      }
    ]
  }
]);

export const RouteProvider = <RouterProvider router={routes}></RouterProvider>;
