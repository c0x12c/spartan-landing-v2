import * as React from 'react';
import SEOPages, { hostname } from '@/documents';
import { EPages } from '@/documents/types';
import { NextSeo } from 'next-seo';
interface ISEOProps {
  page: EPages;
  title?: string;
  description?: string;
}

export const SEO: React.FunctionComponent<ISEOProps> = (props) => {
  const { page, title, description } = props;

  return (
    <NextSeo
      title={title ? title : SEOPages[page].title || SEOPages[EPages.HOME].title}
      description={
        description ? description : SEOPages[page].description || SEOPages[EPages.HOME].description
      }
      canonical={`${hostname}${SEOPages[page].slug || SEOPages[EPages.HOME].slug}`}
      openGraph={{
        type: 'website',
        url: `${hostname}${SEOPages[page].slug || SEOPages[EPages.HOME].slug}`,
        title: title ? title : SEOPages[page].title || SEOPages[EPages.HOME].title,
        description: description
          ? description
          : SEOPages[page].description || SEOPages[EPages.HOME].description,
        locale: 'en_EN',
        images: [
          {
            url: `${SEOPages[EPages.HOME].metaImage}`,
            width: 1920,
            height: 1080,
            alt: SEOPages[page].title || SEOPages[EPages.HOME].title,
          },
        ],
        site_name: `${hostname}${SEOPages[page].slug || SEOPages[EPages.HOME].slug}`,
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon-16.png',
          sizes: '16x16',
        },
        {
          rel: 'icon',
          href: '/favicon-32.png',
          sizes: '32x32',
        },
      ]}
      twitter={{
        handle: '',
        site: '',
        cardType: 'summary_large_image',
      }}
    />
  );
};
