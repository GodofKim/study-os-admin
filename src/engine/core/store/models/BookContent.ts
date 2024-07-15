import { Instance, types } from "mobx-state-tree";
import { BookContentNode, BookContentNodeModel } from "./BookContentNode";

export const BookContentModel = types
  .model("BookContent", {
    id: types.identifier,
    value: types.maybe(BookContentNodeModel),
    createdAt: types.string,
    updatedAt: types.string,
  })
  .actions((self) => ({
    setValue(value: BookContentNode) {
      self.value = value;
    },
  }));

export type BookContent = Instance<typeof BookContentModel>;
