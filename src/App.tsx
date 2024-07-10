import { AppShell, Box, Title } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { Sidebar } from "./components/common/Sidebar";
import { Group } from "./components/DesignSystem/main";
import LogoImage from "./assets/logo.png";
import { HomePage } from "./components/pages/HomePage";
import { SaveButton } from "./components/common/Header/SaveButton";

const App = observer(() => {
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
              <SaveButton />
            </Box>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar>
          <Sidebar />
        </AppShell.Navbar>
        <AppShell.Main>
          <HomePage />
        </AppShell.Main>
      </AppShell>
    </>
  );
});

export default App;
