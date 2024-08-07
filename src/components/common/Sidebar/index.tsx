import { observer } from "mobx-react-lite";
import {
  IconBookQuestion,
  IconHandRaised,
  IconImageOutline,
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
        label="시작하기"
        icon={<IconHandRaised />}
        onClick={() => {
          uiStore.setCurrentPage("main");
        }}
        isActive={uiStore.currentPage === "main"}
      />

      <NavbarItem
        label="목차"
        icon={<IconBookQuestion />}
        onClick={() => {
          uiStore.setCurrentPage("curriculum");
        }}
        isActive={uiStore.currentPage === "curriculum"}
      />
      <NavbarItem
        label="문제"
        icon={<IconQuestionCircle />}
        onClick={() => {
          uiStore.setCurrentPage("problem");
        }}
        isActive={uiStore.currentPage === "problem"}
      />
      <NavbarItem
        label="동영상"
        icon={<IconPlayCircle />}
        onClick={() => {
          uiStore.setCurrentPage("video");
        }}
        isActive={uiStore.currentPage === "video"}
      />
      <NavbarItem
        label="이미지"
        icon={<IconImageOutline />}
        onClick={() => {
          uiStore.setCurrentPage("image");
        }}
        isActive={uiStore.currentPage === "image"}
      />

      <NavbarItem
        label="아티클"
        icon={<IconPaper />}
        onClick={() => {
          uiStore.setCurrentPage("article");
        }}
        isActive={uiStore.currentPage === "article"}
      />
      <NavbarItem
        label="학습지 설정"
        icon={<IconSetting />}
        onClick={() => {
          uiStore.setCurrentPage("setting");
        }}
        isActive={uiStore.currentPage === "setting"}
      />
    </Stack>
  );
});
