import { Button, Link, Sheet, TextField, Typography } from "@mui/joy";

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
      <div>
        <Typography level="h4" component="h1">
          <b>Welcome!</b>
        </Typography>
      </div>

      <TextField name="email" type="email" placeholder="Enter your email" label="Email" />
      <TextField name="password" type="password" placeholder="Your password" label="Password" />

      <Button
        sx={{
          mt: 1,
        }}
      >
        Log in
      </Button>

      <Typography
        sx={{
          alignSelf: "center",
        }}
        endDecorator={<Link href="/sign-up">Sign up</Link>}
        fontSize="sm"
      >
        Don't have an account?
      </Typography>
    </Sheet>
  );
};
