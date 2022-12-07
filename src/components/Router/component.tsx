import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BooksList } from "../../feature/books/books-list";
import { allBooksLoader } from "../../models/book/query-client";
import { queryClient } from "../../services/query-client-service";

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
  return <RouterProvider router={router} />;
};
