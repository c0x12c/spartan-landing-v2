import SEOPages from '@/documents';
import { EPages } from '@/documents/types';

export const GlobalHead = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content={SEOPages[EPages.HOME].title} />
      <meta name="description" content={SEOPages[EPages.HOME].description} />
      <meta name="keywords" content={SEOPages[EPages.HOME].keywords} />
      <meta property="og:description" content={SEOPages[EPages.HOME].description} />
      <link rel="icon" href="" color="" />
      <meta name="theme-color" content={'#FFFFFF'} />
      <meta name="emotion-insertion-point" content="" />
    </>
  );
};
