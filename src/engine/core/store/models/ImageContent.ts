import { Instance, types } from "mobx-state-tree";

export const ImageContentModel = types
  .model("ImageContent", {
    id: types.identifier,
    imageId: types.string,
  })
  .actions((self) => ({
    setImageId(imageId: string) {
      self.imageId = imageId;
    },
  }));

export type ImageContent = Instance<typeof ImageContentModel>;
