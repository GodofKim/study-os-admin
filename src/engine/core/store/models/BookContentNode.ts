import { IAnyModelType, Instance, types } from "mobx-state-tree";
import { VideoContentModel } from "./VideoContent";
import { ImageContentModel } from "./ImageContent";
import { ArticleContentModel } from "./ArticleContent";
import { ProblemTemplateContentModel } from "./ProblemTemplateContent";

export const BookContentNodeModel = types
  .model("BookContentNode", {
    id: types.identifier,
    title: types.string,
    desc: types.string,
    videos: types.array(VideoContentModel),
    images: types.array(ImageContentModel),
    articles: types.array(ArticleContentModel),
    problems: types.array(ProblemTemplateContentModel),
    children: types.array(
      types.late((): IAnyModelType => BookContentNodeModel)
    ),
  })
  .actions((self) => ({
    setTitle(title: string) {
      self.title = title;
    },
    addChild(child: BookContentNode) {
      self.children.push(child);
    },
  }));

export type BookContentNode = Instance<typeof BookContentNodeModel>;
