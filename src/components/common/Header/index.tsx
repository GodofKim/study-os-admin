import { observer } from "mobx-react-lite";
import { Group, IconBell, Stack, Text } from "../../DesignSystem/main";
import Logo from "./logo.png";

const HEIGHT = 60;

export const Header = observer(() => {
  return (
    <>
      <Group
        alignItems="center"
        px={10}
        style={{
          height: HEIGHT,
          borderBottom: "1px solid #e8e8e8",
          backgroundColor: "#ffffff",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10000,
        }}
      >
        <img
          src={Logo}
          alt="logo"
          style={{ width: 42, height: 42, marginRight: 8 }}
        />
        <Stack>
          <Text size="title-2">Study OS Admin</Text>
        </Stack>
        <IconBell size={25} style={{ marginLeft: "auto", marginRight: 15 }} />
      </Group>
      <div style={{ height: HEIGHT }} />
    </>
  );
});
