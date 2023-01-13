import "../styles/tailwind.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Navbar, Footer } from "components/wrapper/index";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { PageInterface } from "lib/data_models/page_interface";
import useOptimizely, { ExperimentInterface } from "utils/useOptimizely";

const ex:ExperimentInterface = {
  name:"Insights Library AB Test",
  id:  "McXqflc5SwGUWzU7HKnh7w",
  options: ["insights", "library"],
  isActive: false,
  value:0,
  defaultValue: 0
}

// const isDEI2022 = slug.includes("dei/2022") ||slug.includes("dei2023")
const pageColors = ["gold", "navy", "sage", "purple","plum"]
// const [DEIpageColor, setDEIpageColor] = useState(null)
// // TODO fix urls

function MyApp({ Component, pageProps }: AppProps) {
 

  const pageData: PageInterface =
    "page" in pageProps ? pageProps.page : pageProps;
  

  const experiments = useOptimizely({pageData, optimizeExperiments:[ex]});

  // Recent DE&I specific code to set a random color. Needs to be this high so doesn't rerender
  const [DEIpageColor, setDEIpageColor] = useState(null)

  useEffect(() => {
    if(pageProps.slug.includes("dei/2022")){
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
          <Navbar experiments={experiments} />
        )}

        <div className="flex-grow ">
          <Component {...pageProps} experiments={experiments} DEIpageColor={DEIpageColor} />
        </div>
        {(!pageData || pageData.slug !== "/public-benefit-reports/2021") && (
          <Footer isBottomGapRemoved={pageProps.isBottomGapRemoved} experiments={experiments} />
        )}
      </div>
    </>
  );
}

export default MyApp;
