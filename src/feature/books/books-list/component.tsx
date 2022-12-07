import { Sheet } from "@mui/joy";
import { FC } from "react";
import { useQuery } from "react-query";
import { useLoaderData } from "react-router-dom";
import { SheetHeader } from "../../../components/sheet-header";
import { allBooksLoader, allBooksQuery } from "../../../models/book/query-client";

type BooksListProps = {};

export const BooksList: FC<BooksListProps> = (props) => {
  const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof allBooksLoader>>>;

  const { data: books } = useQuery({ ...allBooksQuery(), initialData });

  return (
    <Sheet>
      <SheetHeader title="Books" />
      <ul>
        {books && books.map((book) => <li>{`${book.id}) ${book.author} - "${book.title}"`}</li>)}
      </ul>
    </Sheet>
  );
};
