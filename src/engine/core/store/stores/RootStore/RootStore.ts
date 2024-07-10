import { Instance, types } from "mobx-state-tree";
import { UIStoreModel } from "../UIStore";
import { CourseStoreModel } from "../CourseStore";

export const RootStoreModel = types.model("RootStore", {
  uiStore: types.optional(UIStoreModel, {}),
  courseStore: types.optional(CourseStoreModel, {
    currentCourse: {
      id: "1",
      title: "Course 1",
      description: "Description 1",
      coverImage: "https://via.placeholder.com/150",
      node: {
        id: "root",
        title: "고등수학(상)",
        description: "",
        children: [
          {
            id: "1",
            title: "방정식",
            description: "Description 1",
            children: [
              {
                id: "4",
                title: "일차방정식",
                description: "Description 4",
                children: [],
              },
              {
                id: "5",
                title: "이차방정식",
                description: "Description 5",
                children: [],
              },
            ],
          },
          {
            id: "2",
            title: "부등식",
            description: "Description 2",
            children: [
              {
                id: "3",
                title: "이차부등식",
                description: "Description 3",
                children: [],
              },
            ],
          },
        ],
      },
    },
  }),
});

export interface RootStore extends Instance<typeof RootStoreModel> {}
