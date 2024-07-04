import { IAnyModelType, Instance, types } from "mobx-state-tree";

export const CurriculumNodeModel = types
  .model("CurriculumNode", {
    id: types.identifier,
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),

    children: types.array(types.late((): IAnyModelType => CurriculumNodeModel)),
  })
  .actions((self) => ({
    setTitle(title: string) {
      self.title = title;
    },
    setDescription(description: string) {
      self.description = description;
    },
    addChild(child: CurriculumNode) {
      self.children.push(child);
    },
    removeChild(id: string) {
      self.children.replace(self.children.filter((child) => child.id !== id));
    },
  }));

export type CurriculumNode = Instance<typeof CurriculumNodeModel>;
