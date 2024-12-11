import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
