import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='pt'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />

          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          ></link>
          <link rel='shortcut icon' type='image/png' href='./favicon.png' />
          <Script id='gtm-code'>
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MKHNCJL');`}
          </Script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<!-- Google Tag Manager (noscript) -->
              <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKHNCJL"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
              <!-- End Google Tag Manager (noscript) -->`
            }}
          ></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
