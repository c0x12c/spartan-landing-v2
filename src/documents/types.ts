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
  SERVICES = 'services',
  SERVICES_MOBILE = 'mobile-app',
  SERVICES_WEB = 'web-development',
  SERVICES_CLOUD = 'cloud',
  SERVICES_EMERGING = 'emerging-technologies',
  SERVICES_BACKEND = 'backend',
  CASE_STUDY_VOLTA = 'case-study-volta',
  CASE_STUDY_AGORA = 'case-study-agora',
  CASE_STUDY_URSA = 'case-study-ursa',
  CASE_STUDY_HERU = 'case-study-heru',
  LIFE_SPARTAN = 'life-spartan',
  APPLY_JOB = 'apply-job',
  INTERNSHIP = 'internship-program',
  READY_TO_JOIN = 'ready-to-join',
  CASE_STUDY_LIQUIDITY = 'case-study-liquidity',
  SPARTAN_OPERATES = 'how-spartan-operates',
}

export type ISEOPages = {
  [key in EPages]: IDocument;
};

export type IDocument = {
  [key in EDocumentKey]: string;
};
