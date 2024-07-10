import { Instance, types } from "mobx-state-tree";

export const UIStoreModel = types
  .model("UIStore", {
    isSidebarOpen: types.optional(types.boolean, false),
    currentPage: types.optional(types.string, "curriculum"),

    selectedCurriculumNodeValue: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setIsSidebarOpen(isSidebarOpen: boolean) {
      self.isSidebarOpen = isSidebarOpen;
    },
    setCurrentPage(currentPage: string) {
      self.currentPage = currentPage;
    },
    setSelectedCurriculumNodeValue(selectedCurriculumNodeValue: string) {
      self.selectedCurriculumNodeValue = selectedCurriculumNodeValue;
    },
  }));

export type UIStore = Instance<typeof UIStoreModel>;
