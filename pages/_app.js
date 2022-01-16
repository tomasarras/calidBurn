import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import { UserProvider } from "../contexts/UserContext";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

const getLibrary = (provider) => {
  return new Web3(provider);
};

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <UserProvider>
          <Header />
          <div className="mt-4">
            <Component {...pageProps} />
          </div>
        </UserProvider>
      </Web3ReactProvider>
    </>
  );
}
export default MyApp;
