import "../styles/global.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/logo.png" className="favicon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PokeCard</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
