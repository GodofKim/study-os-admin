import { Instance, types } from "mobx-state-tree";
import { Course, CourseModel } from "../models/Course";

export const CourseStoreModel = types
  .model("CourseStore", {
    currentCourse: types.maybe(CourseModel),
  })
  .actions((self) => ({
    setCourse(course: Course) {
      self.currentCourse = course;
    },
  }));

export type CourseStore = Instance<typeof CourseStoreModel>;
