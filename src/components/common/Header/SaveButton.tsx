import { Button, Group, Text } from "@mantine/core";
import { observer } from "mobx-react-lite";

export const SaveButton = observer(() => {
  return (
    <Group align="center">
      <Text>변경사항이 있습니다.</Text>
      <Button variant="gradient">저장</Button>
    </Group>
  );
});
