import { Instance, types } from "mobx-state-tree";
import { Sample, SampleModel } from "../models/Sample";

export const SampleStoreModel = types
  .model("SampleStore", {
    samples: types.array(SampleModel),
  })
  .actions((self) => ({
    setSamples(samples: Sample[]) {
      self.samples.replace(samples);
    },
    addSample(sample: Sample) {
      self.samples.push(sample);
    },
    removeSample(id: string) {
      self.samples.replace(self.samples.filter((sample) => sample.id !== id));
    },
  }));

export type SampleStore = Instance<typeof SampleStoreModel>;
