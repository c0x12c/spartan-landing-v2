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
  CONTACT_US = 'contact-us',
  SERVICE = 'service',
  CASE_STUDY_VOLTA = 'case-study-volta',
  LIFE_SPARTAN = 'life-spartan',
  APPLY_JOB = 'apply-job',
}

export type ISEOPages = {
  [key in EPages]: IDocument;
};

export type IDocument = {
  [key in EDocumentKey]: string;
};
