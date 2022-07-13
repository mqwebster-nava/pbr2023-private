import "../styles/tailwind.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Navbar, Footer } from "components/wrapper/index";
import Head from "next/head";
import { PageInterface } from "shared_interfaces/page_interface";
import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";


// const debugUrl = "http://localhost:3000/";
// const baseUrl = "https://nava-website-2.vercel.app/";


function MyApp({ Component, pageProps }: AppProps) {
  // Formatting page for metadata -- DEI page doesn't have same format so needs extra check
  const pageData: PageInterface = ("page" in pageProps)? pageProps.page : pageProps;
  const env = process.env.NODE_ENV
  const router = useRouter();
  useEffect(() => {
    if(env=="production"){
      const handleRouteChange = (url) => {
        gtag.pageview(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  // TODO need to get the url from the slug and page interface data
  return (
    <>
 {/* { (env=="production") &&  */}
    <Script 
    strategy="afterInteractive"
     src="https://www.googletagmanager.com/gtag/js?id=G-BVP54XXLSE"/>
   {/* { (env=="production") &&   */}
   <Script strategy="afterInteractive" 
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BVP54XXLSE', {
          page_path: window.location.pathname,
        });
      `,
    }}
    />
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
        <Navbar />

        <div className="flex-grow ">
          <Component {...pageProps} />
        </div>
        <Footer isBottomCTA={pageProps.isBottomCTA}/>
      </div>
    </>
  );
}
//G-BVP54XXLSE
export default MyApp;
