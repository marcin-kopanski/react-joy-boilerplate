import { Sheet } from "@mui/joy";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { SheetHeader } from "../../../components/sheet-header";
import { allBooksLoader, allBooksQuery } from "../../../models/book/query-client";

type BooksListProps = {};

export const BooksList: FC<BooksListProps> = (props) => {
  const navigate = useNavigate();
  const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof allBooksLoader>>>;

  const { data: books, isLoading } = useQuery({ ...allBooksQuery(), initialData });

  return (
    <Sheet>
      <SheetHeader title="Books" />
      {isLoading && "Loading"}
      {!isLoading && (
        <ul>
          {books &&
            books.map((book) => (
              <li
                key={`book_${book.id}`}
                onClick={() => navigate(`${book.id}`)}
              >{`${book.id}) ${book.author} - "${book.title}"`}</li>
            ))}
        </ul>
      )}
    </Sheet>
  );
};
