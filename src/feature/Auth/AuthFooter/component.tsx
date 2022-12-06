import { Link, Typography } from "@mui/joy";
import { FC } from "react";

type AuthFooterProps = {
  step: "login" | "signup";
};

export const AuthFooter: FC<AuthFooterProps> = ({ step }) => {
  const [linkText, linkHref, question] =
    step === "login"
      ? ["Sign up", "/signup", "Don't have an account?"]
      : ["Login", "/login", "Already have an account?"];

  return (
    <Typography
      sx={{
        alignSelf: "center",
      }}
      endDecorator={<Link href={linkHref}>{linkText}</Link>}
      fontSize="sm"
    >
      {question}
    </Typography>
  );
};
