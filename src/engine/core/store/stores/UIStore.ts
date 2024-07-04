import { Instance, types } from "mobx-state-tree";

export const UIStoreModel = types
  .model("UIStore", {
    page: types.optional(types.string, ""),
  })

  .actions((self) => ({
    setPage(page: string) {
      self.page = page;
    },
  }));

export type UIStore = Instance<typeof UIStoreModel>;
