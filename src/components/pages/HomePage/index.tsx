import { observer } from "mobx-react-lite";
import "winbox/dist/css/winbox.min.css"; // required
import { useRootStore } from "../../../hooks/useStore";
import { CurriculumPage } from "../CurriculumPage";
import { useEffect } from "react";
import { useBrowseAway } from "../../../hooks/useBrowseAway";

export const HomePage = observer(() => {
  const { uiStore } = useRootStore();

  useBrowseAway();

  // load course
  useEffect(() => {}, []);

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 60px)",
        position: "relative",
      }}
    >
      {uiStore.currentPage === "curriculum" ? <CurriculumPage /> : null}
    </div>
  );
});
