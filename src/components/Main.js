import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import ConnectionPage from "./ConnectionPage";
import IntegrationPage from "./IntegrationPage";
import ChatPage from "./ChatPage";

const Main = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/connect",
      element: <ConnectionPage />,
    },
    {
      path: "/flow",
      element: <IntegrationPage />,
    },
    {
      path: "/chat",
      element: <ChatPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Main;
