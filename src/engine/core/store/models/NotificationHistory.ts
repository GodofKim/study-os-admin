import { Instance, types } from "mobx-state-tree";

export const NotificationHistoryModel = types.model("NotificationHistory", {
  id: types.identifier,
});

export type NotificationHistory = Instance<typeof NotificationHistoryModel>;
