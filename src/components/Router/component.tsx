import { FC, PropsWithChildren, PropsWithoutRef } from "react";
import { QueryClient } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BooksList } from "../../feature/books/books-list";
import { allBooksLoader } from "../../models/book/query-client";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Hello</>,
  },
  {
    path: "books",
    element: <BooksList />,
    loader: allBooksLoader(queryClient),
  },
]);

export const Router: FC<{}> = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
