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
  INTERNSHIP = 'internship-program',
  READY_TO_JOIN = 'ready-to-join',
  SPARTAN_OPERATES = 'how-spartan-operates',
}

export type ISEOPages = {
  [key in EPages]: IDocument;
};

export type IDocument = {
  [key in EDocumentKey]: string;
};
