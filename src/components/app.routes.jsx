import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { BodyComponent } from "./Body";
import App from "../App";
import { Header } from "./Header";
import { IdeaItems } from "./Ideas";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Header />,
        children: [
          { path: "/", element: <BodyComponent /> },
          { path: "ideas/:ideaRoom", element: <IdeaItems /> }
        ]
      }
    ]
  }
]);

export const RouteProvider = <RouterProvider router={routes}></RouterProvider>;
