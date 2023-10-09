/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from 'next/document';
import { GlobalHead } from '@/components/atoms';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GlobalHead />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GSKNE1X103"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GSKNE1X103');
          `,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
              })(document);
              smartlook('init', '058c99ead434102d9cef3c139760b6e4cb2ff09b', { region: 'eu' });
          `,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
