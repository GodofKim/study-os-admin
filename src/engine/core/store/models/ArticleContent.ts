import { Instance, types } from "mobx-state-tree";

export const ArticleContentModel = types
  .model("ArticleContent", {
    id: types.identifier,
    articleId: types.string,
  })
  .actions((self) => ({
    setArticleId(articleId: string) {
      self.articleId = articleId;
    },
  }));

export type ArticleContent = Instance<typeof ArticleContentModel>;
