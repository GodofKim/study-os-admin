import { Instance, types } from "mobx-state-tree";

export const UIStoreModel = types
  .model("UIStore", {
    isSidebarOpen: types.optional(types.boolean, false),

    isCurrculumPageOpen: types.optional(types.boolean, false),
    isProblemPageOpen: types.optional(types.boolean, false),
    isVideoPageOpen: types.optional(types.boolean, false),
    isArticlePageOpen: types.optional(types.boolean, false),
    isBookSettingPageOpen: types.optional(types.boolean, false),
  })

  .actions((self) => ({
    setIsSidebarOpen(isSidebarOpen: boolean) {
      self.isSidebarOpen = isSidebarOpen;
    },
    setIsCurrculumPageOpen(isCurrculumPageOpen: boolean) {
      self.isCurrculumPageOpen = isCurrculumPageOpen;
    },
    setIsProblemPageOpen(isProblemPageOpen: boolean) {
      self.isProblemPageOpen = isProblemPageOpen;
    },
    setIsVideoPageOpen(isVideoPageOpen: boolean) {
      self.isVideoPageOpen = isVideoPageOpen;
    },
    setIsArticlePageOpen(isArticlePageOpen: boolean) {
      self.isArticlePageOpen = isArticlePageOpen;
    },
    setIsBookSettingPageOpen(isBookSettingPageOpen: boolean) {
      self.isBookSettingPageOpen = isBookSettingPageOpen;
    },
  }));

export type UIStore = Instance<typeof UIStoreModel>;
