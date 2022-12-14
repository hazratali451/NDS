import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/swipper.css'
import NextNProgress from 'nextjs-progressbar';



function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextNProgress color="#103559" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
