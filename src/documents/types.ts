enum EDocumentKey {
  title = 'title',
  description = 'description',
  keywords = 'keywords',
  metaImage = 'metaImage',
  slug = 'slug',
}

export enum EPages {
  HOME = 'home',
}

export type ISEOPages = {
  [key in EPages]: IDocument;
};

export type IDocument = {
  [key in EDocumentKey]: string;
};
