export interface APIVideoContent {
  id: string;
  videoId: string;
}

export interface APIImageContent {
  id: string;
  imageId: string;
}

export interface APIArticleContent {
  id: string;
  articleId: string;
}

export interface APIProblemTemplateContent {
  id: string;
  problemTemplateId: string;
}

export interface APIBookContentNode {
  id: string;
  title: string;
  desc: string;
  videos: APIVideoContent[];
  images: APIImageContent[];
  articles: APIArticleContent[];
  problems: APIProblemTemplateContent[];
  children: APIBookContentNode[];
}

export interface APIBookContent {
  id: string;
  value: APIBookContentNode;
  createdAt: string;
  updatedAt: string;
}
