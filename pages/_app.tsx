import "../styles/tailwind.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Navbar, Footer } from "components/wrapper/index";
import Head from "next/head";
import { PageInterface } from "shared_interfaces/page_interface";
import React, { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import Script from "next/script";
//import useOptimizeAB from "utils/Optimize"

function MyApp({ Component, pageProps }: AppProps) {
  const [variant, setVariant] = useState();
  // Formatting page for metadata -- DEI page doesn't have same format so needs extra check
  const pageData: PageInterface =
    "page" in pageProps ? pageProps.page : pageProps;

  const initOptimize = (callback) => {
    const script = document.createElement("script");
    script.src = `https://www.googleoptimize.com/optimize.js?id=OPT-MCXK4VH`;
    script.id = "google-optimize";
    script.onload = callback;
    document.body.appendChild(script);
  };

  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-NRQK2XB",
      dataLayer: { event: "optimize.activate" },
    });
    //  if (variant==undefined && v==undefined)
    initOptimize(() => {
      const v = localStorage.getItem("variantAB");
      if (v !== "undefined" && v) {
        console.log("from local", v);
        setVariant(v);
      }
      let interval = setInterval(() => {
        if (window.google_optimize !== undefined) {
          const _variant = window.google_optimize.get("jt2l8vXiQO2JDyFut6Ji_w");
          console.log(_variant);
          if (typeof _variant !== "undefined" ) {
            console.log("changing time", variant, _variant);
            setVariant(_variant);
            localStorage.setItem("variantAB", _variant);
          }else if (variant == "undefined" || variant==null){
            setVariant(0);
            localStorage.setItem("variantAB",0);
          }
          clearInterval(interval);
        }
      }, 100);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{pageData.title ?? ""}</title>
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:type" content="website" />

        <meta property="og:title" content={pageData.title} />
        <link
          rel="canonical"
          href={`https://www.navapbc.com${pageData.slug}`}
        />
        <meta
          property="og:url"
          content={`https://www.navapbc.com${pageData.slug}`}
        />
        <meta property="og:site_name" content="Nava PBC" />

        {pageData.description && (
          <>
            <meta property="og:description" content={pageData.description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={pageData.title} />
            <meta name="twitter:description" content={pageData.description} />
            <meta name="description" content={pageData.description} />
          </>
        )}

        {pageData.socialImage && (
          <>
            <meta property="og:image" content={pageData.socialImage.url} />
            <meta
              name="twitter:image"
              content={pageData.socialImage.url}
            ></meta>
          </>
        )}

        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <div className="flex flex-col h-screen ">
        <Navbar variant={variant} />

        <div className="flex-grow ">
          <Component {...pageProps} />
        </div>
        <Footer isBottomCTA={pageProps.isBottomCTA} />
      </div>
    </>
  );
}
//G-BVP54XXLSE
export default MyApp;
