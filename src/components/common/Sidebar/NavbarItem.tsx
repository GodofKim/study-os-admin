import { observer } from "mobx-react-lite";
import { Group } from "../../DesignSystem/main";
import styles from "./index.module.css";
import { Text } from "@mantine/core";
import { clsx } from "../../../utils/className";

interface Props {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

export const NavbarItem = observer(
  ({ label, icon, onClick, isActive }: Props) => {
    return (
      <Group
        alignItems="center"
        className={clsx(styles.button, isActive && styles.active)}
        onClick={onClick}
      >
        {icon}
        <Text ml={10} size="sm">
          {label}
        </Text>
      </Group>
    );
  }
);
