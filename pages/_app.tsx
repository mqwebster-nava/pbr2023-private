import "../styles/tailwind.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Navbar, Footer } from "components/wrapper/index";
import Head from "next/head";
import { PageInterface } from "shared_interfaces/page_interface";
import React from "react";
import favicon from "public/images/Nava-Favicon-01.png"
// const debugUrl = "http://localhost:3000/";
// const baseUrl = "https://nava-website-2.vercel.app/";

function MyApp({ Component, pageProps }: AppProps) {
  const pageData: PageInterface = pageProps;
 
  // TODO need to get the url from the slug and page interface data
  return (
    <>
      <Head>
        <title>{pageData.title ?? ""}</title>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:type" content="website" />
        {pageData.title && <meta property="og:title" content={pageData.title} /> }
        {pageData.description && 
        <>
        <meta property="og:description" content={pageData.description } />
        <meta name="twitter:card" content="summary" />
         <meta name="twitter:title" content={pageData.title} />
          <meta name="twitter:description" content={pageData.description} /> 
          <meta name="description" content={pageData.description } />
          </>}
     
        {pageData.socialImage && (
          <>
          <meta property="og:image" content={pageData.socialImage.url} />
          <meta name="twitter:image" content={pageData.socialImage.url}></meta>
          </>
        )}

        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <div className="flex flex-col h-screen ">
        <Navbar />
        
        <div className="flex-grow  ">
          <Component {...pageProps} />
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default MyApp;
