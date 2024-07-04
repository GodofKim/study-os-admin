import { Instance, types } from "mobx-state-tree";

export const SampleModel = types.model("Sample", {
  id: types.identifier,
});

export type Sample = Instance<typeof SampleModel>;
