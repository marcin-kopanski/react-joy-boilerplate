import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { bookByIdLoader, bookByIdQuery } from "../../../models/book/query-client";

export const BookDetails: FC<{}> = () => {
  const { id } = useParams();

  if (id === undefined) throw new Error("No 'id' param!");

  const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof bookByIdLoader>>>;

  const { data: book, isLoading } = useQuery({ ...bookByIdQuery(+id), initialData });
  return <>{`Book "${book.title}"`}</>;
};
