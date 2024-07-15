import { Instance, types } from "mobx-state-tree";

export const ProblemTemplateContentModel = types
  .model("ProblemTemplateContent", {
    id: types.identifier,
    problemTemplateId: types.string,
  })
  .actions((self) => ({
    setProblemTemplateId(problemTemplateId: string) {
      self.problemTemplateId = problemTemplateId;
    },
  }));

export type ProblemTemplateContent = Instance<
  typeof ProblemTemplateContentModel
>;
