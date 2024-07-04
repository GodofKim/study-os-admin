import { Instance, types } from "mobx-state-tree";
import { Course, CourseModel } from "../models/Course";

export const CourseStoreModel = types
  .model("CourseStore", {
    courses: types.array(CourseModel),
  })
  .actions((self) => ({
    setCourses(courses: Course[]) {
      self.courses.replace(courses);
    },
    addCourse(course: Course) {
      self.courses.push(course);
    },
    removeCourse(id: string) {
      self.courses.replace(self.courses.filter((course) => course.id !== id));
    },
  }));

export type CourseStore = Instance<typeof CourseStoreModel>;
