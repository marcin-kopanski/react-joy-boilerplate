import { FC, PropsWithChildren, PropsWithoutRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Hello</>,
  },
]);

export const Router: FC<{}> = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
