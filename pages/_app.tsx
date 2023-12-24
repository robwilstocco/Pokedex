import "../styles/global.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import { Router } from "next/router";
import Loading from "../src/components/Loading";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(Router.events)
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
        <link rel="shortcut icon" href="/images/logo.png" className="favicon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PokeCard</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>{loading ? <Loading /> : <Component {...pageProps} />}</Layout>
      </ThemeProvider>
    </>
  );
}
