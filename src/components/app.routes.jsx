import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { BodyComponent } from "./Body";
import App from "../App";
import { Header } from "./Header";
import { IdeaItems } from "./Ideas";
import { Projects } from "./Projects";
import { OurWork } from "./Ourwork";

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
          { path: "/projects", element: <Projects /> },
          { path: "ideas/:ideaRoom", element: <IdeaItems /> },
          { path: "wework", element: <OurWork /> }

        ]
      }
    ]
  }
]);

export const RouteProvider = <RouterProvider router={routes}></RouterProvider>;
