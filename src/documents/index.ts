import { ISEOPages, EPages } from './types';

export const hostname = '';

const SEOPages: ISEOPages = {
  [EPages.HOME]: {
    title: 'c0x12c',
    description: 'c0x12c',
    keywords: 'c0x12c',
    metaImage: '',
    slug: '/',
  },
  [EPages.ABOUT_US]: {
    title: 'c0x12c - About Us',
    description: 'c0x12c - About Us',
    keywords: 'c0x12c, about us',
    metaImage: '',
    slug: '/about-us',
  },
  [EPages.CASE_STUDY]: {
    title: 'c0x12c - Case Study',
    description: 'c0x12c - Case Study',
    keywords: 'c0x12c, Case Study',
    metaImage: '',
    slug: '/case-study',
  },
  [EPages.SERVICE]: {
    title: 'c0x12c - Services',
    description: 'c0x12c - Services',
    keywords: 'c0x12c, Services',
    metaImage: '',
    slug: '/services',
  },
};

export default SEOPages;
