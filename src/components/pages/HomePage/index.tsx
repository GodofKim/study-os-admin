import { observer } from "mobx-react-lite";
import BackgroundImage from "../../../assets/background.png";
import WinBox from "react-winbox";
import { CurriculumPage } from "../CurriculumPage";
import "winbox/dist/css/winbox.min.css"; // required
import { useRootStore } from "../../../hooks/useStore";

const defaultWinboxOptions = {
  width: 800,
  height: 600,
  x: 200,
  y: 60,
  top: 60,
  left: 200,
  border: 2,
  background: "#494949",
};

export const HomePage = observer(() => {
  const { uiStore } = useRootStore();

  return (
    <div
      style={{
        background: `url(${BackgroundImage}) no-repeat center center / cover`,
        width: "100%",
        height: "calc(100vh - 60px)",
        position: "relative",
      }}
    >
      {uiStore.isCurrculumPageOpen && (
        <WinBox
          title="목차"
          {...defaultWinboxOptions}
          onClose={() => {
            uiStore.setIsCurrculumPageOpen(false);
          }}
          noShadow
        >
          <CurriculumPage />
        </WinBox>
      )}

      {uiStore.isProblemPageOpen && (
        <WinBox
          title="문제"
          {...defaultWinboxOptions}
          onClose={() => {
            uiStore.setIsProblemPageOpen(false);
          }}
          noShadow
        >
          <CurriculumPage />
        </WinBox>
      )}

      {uiStore.isVideoPageOpen && (
        <WinBox
          title="동영상"
          {...defaultWinboxOptions}
          onClose={() => {
            uiStore.setIsVideoPageOpen(false);
          }}
          noShadow
        >
          <CurriculumPage />
        </WinBox>
      )}

      {uiStore.isArticlePageOpen && (
        <WinBox
          title="아티클"
          {...defaultWinboxOptions}
          onClose={() => {
            uiStore.setIsArticlePageOpen(false);
          }}
          noShadow
        >
          <CurriculumPage />
        </WinBox>
      )}

      {uiStore.isBookSettingPageOpen && (
        <WinBox
          title="학습지 설정"
          {...defaultWinboxOptions}
          onClose={() => {
            uiStore.setIsBookSettingPageOpen(false);
          }}
          noShadow
        >
          <CurriculumPage />
        </WinBox>
      )}
    </div>
  );
});
