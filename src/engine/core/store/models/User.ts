import { Instance, types } from "mobx-state-tree";

export const UserModel = types.model("User", {
  id: types.identifier,
});

export type User = Instance<typeof UserModel>;
