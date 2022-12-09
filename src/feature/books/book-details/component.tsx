import { Button, FormControl, FormHelperText, FormLabel, Input, Sheet } from "@mui/joy";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { SheetHeader } from "../../../components/sheet-header";
import { Book } from "../../../models";
import { bookByIdLoader, bookByIdQuery } from "../../../models/book/query-client";
import { axiosInstance } from "../../../services";

export const BookDetails: FC<{}> = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof bookByIdLoader>>>;
  const { data: book, isLoading } = useQuery({ ...bookByIdQuery(+id), initialData });
  const { register, control, handleSubmit, watch, formState } = useForm<Book>({
    defaultValues: {
      ...book,
    },
  });

  const onSubmitHandler = handleSubmit((data) => {
    console.log(data);

    // const response = await axiosInstance.patch(`books/${data.id}`, data);
    // console.log("response", response);
  });

  return (
    <Sheet
      sx={{
        width: 600,
        mx: "auto",
        my: 4,
        px: 2,
        py: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SheetHeader title={`"${book.title}" by ${book.author}`} />

      <form onSubmit={onSubmitHandler}>
        <Controller
          name="title"
          control={control}
          rules={{ required: { value: true, message: "Title is required!!" } }}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Title</FormLabel>
              <Input {...field} />
              <FormHelperText>{error ? error.message : "Helper"}</FormHelperText>
            </FormControl>
          )}
        />

        <Controller
          name="author"
          control={control}
          rules={{ required: { value: true, message: "Author is required!" } }}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Author</FormLabel>
              <Input {...field} />
              <FormHelperText>{error ? error.message : "Helper"}</FormHelperText>
            </FormControl>
          )}
        />

        {/* <input {...register("title", { required: true })} /> */}
        {/* <input {...register("author", { required: true })} /> */}
        <input type={"datetime-local"} {...register("releaseDate", { required: true })} />

        <Button type={"submit"}>Submit</Button>
      </form>

      <Button
        sx={{
          width: 120,
        }}
        onClick={() => navigate("../")}
      >
        Back
      </Button>
    </Sheet>
  );
};
