import "../styles/tailwind.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Navbar, Footer } from "components/wrapper/index";
import Head from "next/head";
import { PageInterface } from "lib/data_models/page_interface";
import React, { useEffect } from "react";
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }: AppProps) {
  // Formatting page for metadata -- DEI page doesn't have same format so needs extra check
  const pageData: PageInterface = ("page" in pageProps)? pageProps.page : pageProps;
  useEffect(() => {
    if(window.location.href.includes("www.navapbc.com/"))TagManager.initialize({ gtmId: 'GTM-NRQK2XB' });
}, []);
  return (
    <>
      <Head>
        <title>{pageData.title ?? ""}</title>
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:type" content="website" />
       
       <meta property="og:title" content={pageData.title} /> 
       <link rel="canonical" href={`https://www.navapbc.com${pageData.slug}`} />
        <meta property="og:url" content={`https://www.navapbc.com${pageData.slug}`} />
        <meta property="og:site_name" content="Nava PBC" />

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
      {(!pageData || pageData.slug!=="/public-benefit-reports/2021") &&  <Navbar /> }

        <div className="flex-grow ">
          <Component {...pageProps} />
        </div>
        {(!pageData || pageData.slug!=="/public-benefit-reports/2021") &&   <Footer isBottomCTA={pageProps.isBottomCTA}/> }
      </div>
    </>
  );
}
//G-BVP54XXLSE
export default MyApp;
