import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import GlobalStyle from "../styles/global";
import { AuthProvider } from "../contexts/AuthContext";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
          <meta httpEquiv="Content-Language" content="pt-br"></meta>
          <meta
            name="description"
            content="RPG Hoffens jogado no Vongola."
          ></meta>
        </Head>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
