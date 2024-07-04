import { Instance, types } from "mobx-state-tree";
import { UIStoreModel } from "../UIStore";
import { CourseStoreModel } from "../CourseStore";

export const RootStoreModel = types.model("RootStore", {
  uiStore: types.optional(UIStoreModel, {}),
  courseStore: types.optional(CourseStoreModel, {}),
});

export interface RootStore extends Instance<typeof RootStoreModel> {}
