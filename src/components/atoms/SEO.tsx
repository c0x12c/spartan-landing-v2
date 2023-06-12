import * as React from 'react';
import SEOPages, { hostname } from '@/documents';
import { EPages } from '@/documents/types';
import { NextSeo } from 'next-seo';
interface ISEOProps {
  page: EPages;
}

const SEO: React.FunctionComponent<ISEOProps> = (props) => {
  const { page } = props;
  return (
    <NextSeo
      title={SEOPages[page].title || SEOPages[EPages.HOME].title}
      description={SEOPages[page].description || SEOPages[EPages.HOME].description}
      canonical={`${hostname}${SEOPages[page].slug || SEOPages[EPages.HOME].slug}`}
      openGraph={{
        type: 'website',
        url: `${hostname}`,
        title: SEOPages[page].title || SEOPages[EPages.HOME].title,
        description: SEOPages[page].description || SEOPages[EPages.HOME].description,
        locale: 'en_EN',
        images: [
          {
            url: `${SEOPages[EPages.HOME].metaImage}`,
            width: 1280,
            height: 756,
            alt: SEOPages[page].title || SEOPages[EPages.HOME].title,
          },
        ],
        site_name: `${hostname}`,
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '',
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

export default SEO;
