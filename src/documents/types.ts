enum EDocumentKey {
  title = 'title',
  description = 'description',
  keywords = 'keywords',
  metaImage = 'metaImage',
  slug = 'slug',
}

export enum EPages {
  HOME = 'home',
  ABOUT_US = 'about-us',
  CASE_STUDY = 'case-study',
}

export type ISEOPages = {
  [key in EPages]: IDocument;
};

export type IDocument = {
  [key in EDocumentKey]: string;
};
