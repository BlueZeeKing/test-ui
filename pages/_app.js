import '../styles/globals.css'
import Head from "next/head"

import React, { useEffect } from "react";
import { Workbox } from "workbox-window";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      console.warn("Pwa support is disabled");
      return;
    }

    const wb = new Workbox("sw.js", { scope: "/" });
    wb.register();
  });

  useEffect(() => {
    function change() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    window.addEventListener('resize', change)

    return () => {
      window.removeEventListener('resize', change)
    }
  })
  
  return (
    <>
      <Head>
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#db4938" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
