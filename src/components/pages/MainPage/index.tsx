import { observer } from "mobx-react-lite";
import { useRootStore } from "../../../hooks/useStore";
import { CurriculumPage } from "../CurriculumPage";
import { useBrowseAway } from "../../../hooks/useBrowseAway";
import { useBookWithDetail } from "../../../api/book";
import { Box, LoadingOverlay } from "@mantine/core";
import { useEffect } from "react";
import { StartPage } from "../StartPage";
import { ProblemPage } from "../ProblemPage";
import { VideoPage } from "../VideoPage";
import { ImagePage } from "../ImagePage";
import { ArticlePage } from "../ArticlePage";
import { SettingPage } from "../SettingPage";
import { BookModel } from "../../../engine/core/store/models/Book";

export const MainPage = observer(() => {
  const { uiStore, bookStore } = useRootStore();
  const { book, isLoading } = useBookWithDetail({
    bookId: uiStore.selectedBookId,
  });

  useBrowseAway();

  useEffect(() => {
    if (book) {
      const newBook = BookModel.create(book);
      bookStore.setCurrentBook(newBook);
    }
  }, [book, bookStore]);

  if (isLoading) {
    return (
      <Box
        style={{
          width: "100%",
          height: "calc(100vh - 60px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingOverlay visible />
      </Box>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 60px)",
        position: "relative",
      }}
    >
      {uiStore.currentPage === "main" ? <StartPage /> : null}
      {uiStore.currentPage === "curriculum" ? <CurriculumPage /> : null}
      {uiStore.currentPage === "problem" ? <ProblemPage /> : null}
      {uiStore.currentPage === "video" ? <VideoPage /> : null}
      {uiStore.currentPage === "image" ? <ImagePage /> : null}
      {uiStore.currentPage === "article" ? <ArticlePage /> : null}
      {uiStore.currentPage === "setting" ? <SettingPage /> : null}
    </div>
  );
});
