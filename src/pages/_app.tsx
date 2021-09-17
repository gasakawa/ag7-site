import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>
          AG7 Digital Business | Estrategias digitales para impulsar tu negocio
        </title>
        <meta
          name='description'
          content='Posiciona tu negocio en internet a través de diseño y desarrollo web, social media, advertising, asesorías. Comienza ya!'
        />
        <meta
          name='robots'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <link rel='canonical' href='https://www.ag7digital.com/' />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='AG7 Digital Business | Estrategias digitales para impulsar tu negocio'
        />
        <meta
          property='og:description'
          content='Posiciona tu negocio en internet a través de diseño y desarrollo web, social media, advertising, asesorías. Comienza ya!'
        />
        <meta property='og:url' content='https://www.ag7digital.com/' />
        <meta property='og:site_name' content='AG7 Digital Business' />
        <meta
          property='article:modified_time'
          content='2021-04-14T12:46:40+00:00'
        />
        <meta
          property='og:image'
          content='https://www.ag7digital.com/wp-content/uploads/2020/09/img_top_01.png'
        />
        <meta name='twitter:card' content='summary_large_image' />

        <meta
          name='google-site-verification'
          content='iTQ7zMidgovk0_n7k_H4YQfBXQobtY87989O2DNoIVU'
        />
        <meta
          name='facebook-domain-verification'
          content='ezsqhuvh0y1vmz187odd8rnjyna7ze'
        />
        <meta
          name='viewport'
          content='width=device-width,minimum-scale=1,initial-scale=1.0'
        ></meta>
        <link rel='shortcut icon' href='favicon.png' />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
