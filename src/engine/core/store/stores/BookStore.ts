import { Instance, types } from "mobx-state-tree";
import { Book, BookModel } from "../models/Book";

export const BookStoreModel = types
  .model("BookStore", {
    currentBook: types.maybe(BookModel),
  })
  .actions((self) => ({
    setCurrentBook(book: Book) {
      self.currentBook = book;
    },
  }));

export type BookStore = Instance<typeof BookStoreModel>;
