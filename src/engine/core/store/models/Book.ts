import { Instance, types } from "mobx-state-tree";
import { BookContentModel } from "./BookContent";

export const BookModel = types.model("Book", {
  id: types.identifier,
  title: types.string,
  shortDesc: types.string,
  desc: types.string,
  coverImageUrl: types.string,
  bookContent: types.maybe(BookContentModel),
  createdAt: types.string,
  updatedAt: types.string,
});

export type Book = Instance<typeof BookModel>;
