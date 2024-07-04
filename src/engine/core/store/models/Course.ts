import { Instance, types } from "mobx-state-tree";
import { CurriculumNode, CurriculumNodeModel } from "./CurriculumNode";

export const CourseModel = types
  .model("Course", {
    id: types.identifier,
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    coverImage: types.optional(types.string, ""),

    node: types.optional(CurriculumNodeModel, {
      id: "root",
      title: "Root",
      description: "",
      children: [],
    }),
  })
  .actions((self) => ({
    setTitle(title: string) {
      self.title = title;
    },
    setDescription(description: string) {
      self.description = description;
    },
    setCoverImage(coverImage: string) {
      self.coverImage = coverImage;
    },
    setNode(node: CurriculumNode) {
      self.node = node;
    },
  }));

export type Course = Instance<typeof CourseModel>;
