import { Instance, types } from "mobx-state-tree";

export const VideoContentModel = types
  .model("VideoContent", {
    id: types.identifier,
    videoId: types.string,
  })
  .actions((self) => ({
    setVideoId(videoId: string) {
      self.videoId = videoId;
    },
  }));

export type VideoContent = Instance<typeof VideoContentModel>;
