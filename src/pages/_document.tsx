import { Html, Head, Main, NextScript } from 'next/document';
import { GlobalHead } from '@/components/atoms';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GlobalHead />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
