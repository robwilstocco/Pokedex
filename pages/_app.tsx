import type { AppProps } from "next/app";
import { Roboto } from 'next/font/google'
import Head from "next/head";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import "../styles/global.css";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "../utils/theme";
import Loading from "../src/components/Loading/Loading";
import Layout from "../src/components/Layout/Layout";
import { SearchProvider } from "../src/context/SearchProvider";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-roboto'
  })

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Explore the Pokédex and discover detailed information about your favorite Pokémon."/>
        <title>PokeCard</title>
      </Head>
      <div className={`${roboto.className}`}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <SearchProvider
              initialAllPokemon={pageProps.pokemons}
              initialPage={pageProps.initialPage}
            >
              <Layout>
                {loading ? <Loading /> : <Component {...pageProps} />}
              </Layout>
            </SearchProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </div>
    </>
  );
}
