import "../styles/tailwind.css"
import type { AppProps /*, AppContext */ } from "next/app"
import Navbar from "components/wrapper/navbar"

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Navbar/>
    <div className="pt-16"/>
   <Component {...pageProps} />
   </div>
}

export default MyApp
