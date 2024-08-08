import React from "react";
import '../styles/globals.css'
import Input from "../components/Input";

function App({ Component, pageProps }) {

  return (
    <>
      <Input placeholder="Search Weather by Zip Code..." />
      <Component {...pageProps} />
    </>
  );
}

export default App;