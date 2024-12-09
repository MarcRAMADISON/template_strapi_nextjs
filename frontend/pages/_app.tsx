import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JDA Diffusion</title>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:url" content="https://jdadiffusion.fr" />
        <meta property="og:title" content="JDA Diffusion" />
        <meta
          property="og:description"
          content="Site à propos de JDA Diffusion, qui offre des services de community manager et de développement web"
        />
        <meta
          name="description"
          content="Site à propos de JDA Diffusion, qui offre des services de community manager et de développement web"
        />
        <meta
          name="keywords"
          content="JDA Diffusion, site vitrine, développement web, community manager, réseaux sociaux, communication, client, tik tok, facebook, instagram, linkedin "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
