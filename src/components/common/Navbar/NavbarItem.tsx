import { Stack, Text } from "../../DesignSystem/main";

interface Props {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const NavbarItem = ({ label, icon, onClick }: Props) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      gap={4}
      style={{ height: "100%" }}
      onClick={onClick}
    >
      {icon}
      <Text size="caption-1-strong">{label}</Text>
    </Stack>
  );
};
