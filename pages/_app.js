import React, { useEffect, useContext } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Header from "../components/Header/Header";
import { UserProvider } from "../contexts/UserContext";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UserProvider>
        <Header />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
export default MyApp;
