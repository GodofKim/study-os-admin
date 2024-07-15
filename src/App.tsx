import { AppShell, Box, Button, Menu, Title } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { Sidebar } from "./components/common/Sidebar";
import { Group } from "./components/DesignSystem/main";
import LogoImage from "./assets/logo.png";
import { HomePage } from "./components/pages/HomePage";
import { useRootStore } from "./hooks/useStore";
import { MainPage } from "./components/pages/MainPage";
import { useEffect } from "react";

const App = observer(() => {
  const { uiStore } = useRootStore();

  useEffect(() => {
    const url = new URL(window.location.href);
    const bookId = url.searchParams.get("bookId");

    if (bookId) {
      uiStore.setCurrentPage("main");
      uiStore.setSelectedBookId(bookId);
    }
  }, [uiStore]);

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 200,
          breakpoint: "sm",
        }}
      >
        <AppShell.Header>
          <Group alignItems="center" p={20} style={{ height: 60 }}>
            <img
              src={LogoImage}
              width={30}
              style={{ marginRight: 10 }}
              draggable={false}
            />
            <Title order={4}>콴다노트 콘텐츠 메이커</Title>
            <Box style={{ marginLeft: "auto" }}>
              <Menu>
                <Menu.Target>
                  <Button variant="transparent" color="gray">
                    Menu
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    onClick={() => {
                      uiStore.setCurrentPage("home");

                      // remove bookId query param from url
                      const url = new URL(window.location.href);
                      url.searchParams.delete("bookId");

                      window.history.pushState({}, "", url.toString());
                    }}
                  >
                    프로젝트 목록 보기
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Box>
            {/* <Box style={{ marginLeft: "auto" }}>
              <SaveButton />
            </Box> */}
          </Group>
        </AppShell.Header>
        {uiStore.currentPage === "home" ? (
          <Group mt={60} p={20}>
            <HomePage />
          </Group>
        ) : (
          <>
            <AppShell.Navbar>
              <Sidebar />
            </AppShell.Navbar>
            <AppShell.Main>
              <MainPage />
            </AppShell.Main>
          </>
        )}
      </AppShell>
    </>
  );
});

export default App;
