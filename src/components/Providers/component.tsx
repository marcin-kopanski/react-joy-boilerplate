import { FC, PropsWithChildren } from "react";
import { CssVarsProvider } from "@mui/joy";
import CssBaseline from "@mui/joy/CssBaseline";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "../../services/query-client-service";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </CssVarsProvider>
  );
};
