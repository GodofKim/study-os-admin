import { observer } from "mobx-react-lite";
import {
  Group,
  IconBars,
  IconGraduate,
  IconHome,
  IconPage,
} from "../../DesignSystem/main";
import { NavbarItem } from "./NavbarItem";
import Logo from "./logo.png";

const HEIGHT = 60;

interface Props {
  onItemClick: (page: string) => void;
}

export const Navbar = observer(({ onItemClick }: Props) => {
  return (
    <>
      <Group
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          borderTop: "1px solid #e8e8e8",
          height: HEIGHT,
        }}
      >
        <NavbarItem
          label="홈"
          icon={<IconHome />}
          onClick={() => onItemClick("home")}
        />
        <NavbarItem
          label="로드맵"
          icon={<IconGraduate />}
          onClick={() => onItemClick("roadmap")}
        />
        {/* <NavbarItem
          label="지식그래프"
          icon={<IconCompass />}
          onClick={() => onItemClick("graph")}
        /> */}
        <NavbarItem
          label="AI"
          onClick={() => onItemClick("copilot")}
          icon={
            <img
              src={Logo}
              alt="logo"
              style={{
                width: 30,
                height: 30,
                marginBottom: -5,
                marginTop: -5,
              }}
            />
          }
        />
        <NavbarItem
          label="자료"
          icon={<IconPage />}
          onClick={() => onItemClick("study")}
        />
        {/* <NavbarItem
          label="노트"
          icon={<IconPencil />}
          onClick={() => onItemClick("note")}
        /> */}
        <NavbarItem
          label="메뉴"
          icon={<IconBars />}
          onClick={() => onItemClick("menu")}
        />
      </Group>
      <div style={{ height: HEIGHT }} />
    </>
  );
});
