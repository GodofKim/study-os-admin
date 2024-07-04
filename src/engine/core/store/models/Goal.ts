import { Instance, types } from "mobx-state-tree";

export const GoalModel = types
  .model("Goal", {
    id: types.identifier,
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    deadline: types.optional(types.Date, new Date()),
    createdAt: types.optional(types.Date, new Date()),
    updatedAt: types.optional(types.Date, new Date()),
    isCompleted: types.optional(types.boolean, false),
    deletedAt: types.optional(types.Date, new Date()),
    type: types.optional(types.string, "long-term"), // long-term, short-term, daily
  })
  .actions((self) => ({
    setTitle(title: string) {
      self.title = title;
    },
    setDescription(description: string) {
      self.description = description;
    },
    setDeadline(deadline: Date) {
      self.deadline = deadline;
    },
    setIsCompleted(isCompleted: boolean) {
      self.isCompleted = isCompleted;
    },
    setDeletedAt(deletedAt: Date) {
      self.deletedAt = deletedAt;
    },
    setType(type: string) {
      self.type = type;
    },
  }));

export type Goal = Instance<typeof GoalModel>;
