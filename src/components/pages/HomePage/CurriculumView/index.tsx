import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { getCourses } from "../../../../engine/infrastructure/course";
import { useRootStore } from "../../../../hooks/useStore";
import { CourseModel } from "../../../../engine/core/store/models/Course";
import { Select, Text } from "../../../DesignSystem/main";

export const CurriculumView = observer(() => {
  const { courseStore } = useRootStore();
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  // Load courses
  useEffect(() => {
    async function loadCourses() {
      const data = await getCourses();

      const courseInstances = data.map((x) => CourseModel.create(x));

      courseStore.setCourses(courseInstances);
    }

    loadCourses();
  }, [courseStore]);

  return (
    <>
      <Text size="title-2">과목 생성기</Text>
      <Select
        label="과목 선택"
        options={courseStore.courses.map((course) => ({
          label: course.title,
          value: course.id,
        }))}
        value={selectedCourseId}
        onChange={(value) => setSelectedCourseId(value)}
      />
    </>
  );
});
