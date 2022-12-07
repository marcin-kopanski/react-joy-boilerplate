import { Typography } from "@mui/joy";
import { FC } from "react";

type SheetHeaderProps = {
  title: string;
};

export const SheetHeader: FC<SheetHeaderProps> = ({ title }) => {
  return (
    <div>
      <Typography level="h4" component="h1">
        <b>{title}</b>
      </Typography>
    </div>
  );
};
