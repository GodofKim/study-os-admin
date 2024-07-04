import { observer } from "mobx-react-lite";
import { Stack } from "../../DesignSystem/main";
import { CurriculumView } from "./CurriculumView";

export const HomePage = observer(() => {
  return (
    <div>
      <Stack px={40} py={20} gap={30}>
        <CurriculumView />
      </Stack>
    </div>
  );
});
