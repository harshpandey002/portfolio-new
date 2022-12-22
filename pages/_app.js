import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import "@/styles/globals.css";
import "@/styles/typography.css";
import "@/styles/code.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
