import { axiosInstance } from "../../services";
import { Book } from "./model";

const fetchAllBooks = async (): Promise<Book[]> => {
  return await axiosInstance.get("books").then((response) => response.data);
};

export const BooksClient = {
  fetchAllBooks,
};
