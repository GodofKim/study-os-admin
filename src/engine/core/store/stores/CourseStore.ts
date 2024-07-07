import { Instance, types } from "mobx-state-tree";
import { Course, CourseModel } from "../models/Course";

export const CourseStoreModel = types
  .model("CourseStore", {
    course: types.maybe(CourseModel),
  })
  .actions((self) => ({
    setCourse(course: Course) {
      self.course = course;
    },
  }));

export type CourseStore = Instance<typeof CourseStoreModel>;
