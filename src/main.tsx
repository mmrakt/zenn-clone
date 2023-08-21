import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorPage/index.tsx";
import Top from "./routes/top/index.tsx";
import Post from "./routes/post/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:postId",
    element: <Post />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
