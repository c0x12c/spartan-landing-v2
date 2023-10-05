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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
