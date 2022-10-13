import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../apollo";
import Header from "components/header/Header";
import { Box } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

function MyApp({
  Component,

  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Header />
        <Box
          pt={8}
          minHeight="100vh"
          display="flex"
          flexDirection="column"
          sx={{ backgroundColor: "#16004f" }}
        >
          <Component {...pageProps} />
        </Box>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
