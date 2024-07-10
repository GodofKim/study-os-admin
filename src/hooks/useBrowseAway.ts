import { useEffect } from "react";

export const useBrowseAway = () => {
  useEffect(() => {
    const handleBrowseAway = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      return (event.returnValue =
        "변경사항이 저장되지 않았습니다. 페이지를 벗어나시겠습니까?");
    };

    window.addEventListener("beforeunload", handleBrowseAway);

    return () => {
      window.removeEventListener("beforeunload", handleBrowseAway);
    };
  }, []);
};
