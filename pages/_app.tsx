import "../styles/tailwind.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Navbar, Footer } from "components/wrapper/index";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { PageInterface } from "lib/data_models/page_interface";

const variantAB = ["insights", "library"];

function MyApp({ Component, pageProps }: AppProps) {
  const [variant, setVariant] = useState(null);
  // Formatting page for metadata -- DEI page doesn't have same format so needs extra check
  const pageData: PageInterface =
    "page" in pageProps ? pageProps.page : pageProps;

  const initOptimize = (callback) => {
    const script = document.createElement("script");
    script.src = `https://www.googleoptimize.com/optimize.js?id=OPT-MCXK4VH`;
    script.id = "google-optimize";
    script.onload = callback;
    script.onerror = () => {
      setVariant(variantAB[0]);
      localStorage.setItem("variantAB", variantAB[0]);
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    // @ts-ignore
    TagManager.initialize({
      gtmId: "GTM-NRQK2XB",
      dataLayer: { event: "optimize.activate" },
    });
    if (pageData && pageData.slug && pageData.slug.includes("public-benefit-reports/2021")) return;

    initOptimize(() => {
      const v = localStorage.getItem("variantAB");
      if (v !== "undefined" && v) {
        setVariant(v);
      }
      let interval = setInterval(() => {
        // @ts-ignore
        if (window.google_optimize !== undefined) {
          // @ts-ignore
          const _variant = window.google_optimize.get("McXqflc5SwGUWzU7HKnh7w");
          if (typeof _variant !== "undefined") {
            setVariant(variantAB[_variant]);
            localStorage.setItem("variantAB", variantAB[_variant]);
          } else if (variant == "undefined" || variant == null) {
            setVariant(variantAB[0]);
            localStorage.setItem("variantAB", variantAB[0]);
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
        {(!pageData || pageData.slug !== "/public-benefit-reports/2021") && (
          <Navbar variant={variant} />
        )}

        <div className="flex-grow ">
          <Component {...pageProps} variantAB={variant} />
        </div>
        {(!pageData || pageData.slug !== "/public-benefit-reports/2021") && (
          <Footer isBottomCTA={pageProps.isBottomCTA} variant={variant} />
        )}
      </div>
    </>
  );
}

//variantAB={variant}
//G-BVP54XXLSE
export default MyApp;
