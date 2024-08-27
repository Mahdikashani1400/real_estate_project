import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/Header";
import Sidebar from "@/components/modules/Sidebar";
import RealTors from "@/components/templates/RealTors";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Header />
        <RealTors />

        <Component {...pageProps} />
        <Footer />
      </div>

    </>
  )
}