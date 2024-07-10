import { observer } from "mobx-react-lite";
import {
  IconBookQuestion,
  IconPaper,
  IconPlayCircle,
  IconQuestionCircle,
  IconSetting,
  Stack,
} from "../../DesignSystem/main";
import { NavbarItem } from "./NavbarItem";
import { useRootStore } from "../../../hooks/useStore";

export const Sidebar = observer(() => {
  const { uiStore } = useRootStore();

  return (
    <Stack p={10} gap={5}>
      <NavbarItem
        label="목차"
        icon={<IconBookQuestion />}
        onClick={() => {
          uiStore.setCurrentPage("curriculum");
        }}
      />
      <NavbarItem
        label="문제"
        icon={<IconQuestionCircle />}
        onClick={() => {
          uiStore.setCurrentPage("problem");
        }}
      />
      <NavbarItem
        label="동영상"
        icon={<IconPlayCircle />}
        onClick={() => {
          uiStore.setCurrentPage("video");
        }}
      />
      <NavbarItem
        label="아티클"
        icon={<IconPaper />}
        onClick={() => {
          uiStore.setCurrentPage("article");
        }}
      />
      <NavbarItem
        label="학습지 설정"
        icon={<IconSetting />}
        onClick={() => {
          uiStore.setCurrentPage("setting");
        }}
      />
    </Stack>
  );
});
