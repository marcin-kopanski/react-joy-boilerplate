import { FC, PropsWithChildren, PropsWithoutRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export const Router: FC<{}> = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
