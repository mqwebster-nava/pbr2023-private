import "../styles/tailwind.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Navbar, Footer } from "components/wrapper/index";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { PageInterface } from "lib/data_models/page_interface";
import useOptimizely, { ExperimentInterface } from "utils/useOptimizely";
import TagManager from "react-gtm-module";

const ex:ExperimentInterface = {
  name:"Insights Library AB Test",
  id:  "McXqflc5SwGUWzU7HKnh7w",
  options: ["insights", "library"],
  isActive: false,
  value:0,
  defaultValue: 0
}
// Maybe add a hideWrappers prop so don't do the specific check

const pageColors = ["gold", "navy", "sage", "purple","plum"]

function MyApp({ Component, pageProps }: AppProps) {

  const pageData: PageInterface =
    "page" in pageProps ? pageProps.page : pageProps;
  

  // This also sets the google analytics, which is kind of dumb
  // I added a check in the use effect, to turn on analytics if this doesn't run
  const experiments =[] //useOptimizely({pageData, optimizeExperiments:[ex]});

  // Recent DE&I specific code to set a random color. Needs to be this high so doesn't rerender
  const [DEIpageColor, setDEIpageColor] = useState(null)

  useEffect(() => {
     // @ts-ignore
    if(!window.dataLayer){
    TagManager.initialize({
      gtmId: "GTM-NRQK2XB",
    });
  }
    if(pageProps && pageProps.slug?.includes("dei/2022")){
      const c = pageColors[Math.floor(Math.random() * pageColors.length)];
      setDEIpageColor(c)
    }
  },[]);


  return (
    <>
      <Head>
        <title>{pageData.title ?? ""}</title>
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:type" content="website" />

        <meta property="og:title" content={pageData.title} />
        <link
          rel="canonical"
          href={pageData.slug ?`https://www.navapbc.com${pageData.slug}`: `https://www.navapbc.com/404`}
        />
        <meta
          property="og:url"
          content={pageData.slug ?`https://www.navapbc.com${pageData.slug}`: `https://www.navapbc.com/404`}
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
          <Navbar experiments={experiments} />
        )}

        <div className="flex-grow ">
          <Component {...pageProps} experiments={experiments} DEIpageColor={DEIpageColor} />
        </div>
        {(!pageData || pageData.slug !== "/public-benefit-reports/2021") && (
          <Footer isBottomGapRemoved={pageProps.isBottomGapRemoved??false} experiments={experiments} />
        )}
      </div>
    </>
  );
}

export default MyApp;
