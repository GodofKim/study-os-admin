import { observer } from "mobx-react-lite";
import { Group, Text } from "../../DesignSystem/main";
import styles from "./index.module.css";

interface Props {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const NavbarItem = observer(({ label, icon, onClick }: Props) => {
  return (
    <Group alignItems="center" className={styles.button} onClick={onClick}>
      {icon}
      <Text ml={10} size="subheadline">
        {label}
      </Text>
    </Group>
  );
});
