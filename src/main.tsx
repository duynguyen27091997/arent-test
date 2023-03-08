import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoute from "./layouts/ProtectedRoute";
import Column from "./pages/column";
import Home from "./pages/home";
import Record from "./pages/record";

// Create a client
const queryClient = new QueryClient();

// Create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/records",
    element: (
      <ProtectedRoute>
        <Record />
      </ProtectedRoute>
    ),
  },
  {
    path: "/columns",
    element: <Column />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
