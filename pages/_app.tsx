import type { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import "../styles/global.css";
import { theme } from "../utils/theme";
import Loading from "../src/components/Loading/Loading";
import Layout from "../src/components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PokeCard</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Layout>
            {loading ? <Loading /> : <Component {...pageProps} />}
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
