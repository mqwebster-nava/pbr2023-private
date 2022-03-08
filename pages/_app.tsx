
import "../styles/tailwind.css"
import type { AppProps /*, AppContext */ } from "next/app"
import {Navbar, Footer}from "components/wrapper/index"

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="flex flex-col h-screen">
    <Navbar/>
    <div className="flex-grow">
   <Component {...pageProps}/>
   </div>
  <Footer/>
   </div>
}

export default MyApp;
