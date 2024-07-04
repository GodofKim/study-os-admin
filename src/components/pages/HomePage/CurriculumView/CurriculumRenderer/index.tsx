import { observer } from "mobx-react-lite";
import { Course } from "../../../../../engine/core/store/models/Course";

interface Props {
  course: Course;
}

export const CurriculumRenderer = observer(({ course }: Props) => {
  return <div></div>;
});
