import Head from "next/head";

import { SelectWork } from "@/components/case/SelectWork";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <SelectWork />
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
