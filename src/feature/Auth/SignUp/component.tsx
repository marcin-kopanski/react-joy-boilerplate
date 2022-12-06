import { Button, Link, Sheet, TextField, Typography } from "@mui/joy";
import { AuthFooter } from "../../../components/Auth/AuthFooter";
import { SheetHeader } from "../../../components/SheetHeader";

type SignUpProps = {};

export const SignUp = (props: SignUpProps) => {
  return (
    <Sheet
      sx={{
        width: 300,
        mx: "auto",
        my: 4,
        px: 2,
        py: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
      variant="outlined"
    >
      <SheetHeader title="Welcome!" />

      <TextField name="email" type="email" placeholder="Enter your email" label="Email" />
      <TextField name="password" type="password" placeholder="Your password" label="Password" />

      <Button
        sx={{
          mt: 1,
        }}
      >
        Sign up
      </Button>

      <AuthFooter step="signup" />
    </Sheet>
  );
};
