import { observer } from "mobx-react-lite";
import { Stack, Text } from "../../DesignSystem/main";
import { useRootStore } from "../../../hooks/useStore";
import { CurriculumNodeComponent } from "./CurriculumNodeComponent";

export const CurriculumPage = observer(() => {
  const { courseStore } = useRootStore();

  const { course } = courseStore;

  return (
    <Stack p={20}>
      <Text size="title-2">목차</Text>
      {course && <CurriculumNodeComponent node={course.node} depth={0} />}
    </Stack>
  );
});
