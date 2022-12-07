import { QueryClient } from "react-query";
import { BooksClient } from "./client";
import { Book } from "./model";
import { BooksKeys } from "./query-key-factory";

export const allBooksQuery = () => ({
  queryKey: BooksKeys.all,
  queryFn: async () => BooksClient.fetchAllBooks(),
});

export const allBooksLoader = (queryClient: QueryClient) => async (): Promise<Book[]> => {
  const query = allBooksQuery();
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};
