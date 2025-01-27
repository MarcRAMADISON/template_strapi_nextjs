import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', "G-LV4ERZY102", {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  
  return (
    <>
      <script src="//code.tidio.co/xgvwgigvnan49mskqlhcxou1gsetogvm.js" async></script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LV4ERZY102"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LV4ERZY102');`}
      </Script>
      <DefaultSeo
        title="JDA Diffusion"
        description="Site à propos de JDA Diffusion, qui offre des services de community manager et de développement web"
        openGraph={{
          type: "JDA Diffusion",
          locale: "fr",
          url: "https://jdadiffusion.fr",
          siteName: "JDA diffusion",
          description:
            "Site à propos de JDA Diffusion, qui offre des services de community manager et de développement web",
        }}
        twitter={{
          handle: "@JdaDiffusion",
          site: "@JdaDiffusion",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
