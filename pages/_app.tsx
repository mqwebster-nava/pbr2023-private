import "../styles/tailwind.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Navbar, Footer } from "components/wrapper/index";
import Head from "next/head";
import { PageInterface } from "shared_interfaces/page_interface";

const debugUrl = "http://localhost:3000/"
const baseUrl = "https://nava-website-2.vercel.app/";


function MyApp({ Component, pageProps }: AppProps) {
  const pageData: PageInterface = pageProps;
  // TODO need to get the url from the slug and page interface data
  return (
    <>
      <Head>
      <title>
          {pageData.title}
        </title>
        <meta property="og:url" content={`${baseUrl}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={pageData.title}
        />
        <meta name="twitter:card" content={pageData.description} />
        <meta
          property="og:description"
          content={pageData.description}
        />
        <meta property="og:image" content={pageData.socialImage.url} />
      </Head>
      <div className="flex flex-col h-screen ">
        <Navbar />
        <div className="flex-grow  ">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
