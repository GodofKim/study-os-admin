import { apiClient } from "../../utils/apiClient";

interface CurriculumNodeMessage {
  id: string;
  title: string;
  description: string;
  children: CurriculumNodeMessage[];
}

interface CourseMessage {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  node: CurriculumNodeMessage;
}

type GetCoursesResponse = CourseMessage[];

export const getCourses = async () => {
  const response = await apiClient.get<GetCoursesResponse>("/v1/course");

  return response.data;
};

export const getCourse = async (id: string) => {
  const response = await apiClient.get<CourseMessage>(`/v1/course/${id}`);

  return response.data;
};

export const createCourse = async (course: CourseMessage) => {
  const response = await apiClient.post<CourseMessage>("/v1/course", course);

  return response.data;
};

export const updateCourse = async (course: CourseMessage) => {
  const response = await apiClient.put<CourseMessage>(
    `/v1/course/${course.id}`,
    course
  );

  return response.data;
};
