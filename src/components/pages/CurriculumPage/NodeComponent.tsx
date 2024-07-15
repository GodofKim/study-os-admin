import { Box, Divider, Group, Text } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../../../hooks/useStore";
import { BookContentNode } from "../../../engine/core/store/models/BookContentNode";

interface Props {
  depth: number;
  node: BookContentNode;
}

const colorByDepth = [
  "#f85f73",
  "#f8b739",
  "#39f8b3",
  "#39f8f8",
  "#3973f8",
  "#b739f8",
  "#f139f8",
];

export const NodeComponent = observer(({ node, depth }: Props) => {
  const { uiStore } = useRootStore();
  const { selectedCurriculumNodeValue } = uiStore;

  const isActived = selectedCurriculumNodeValue === node.id;

  const handleClick = () => {
    uiStore.setSelectedCurriculumNodeValue(node.id);
  };

  return (
    <>
      <Group gap={0} mb={5}>
        <Divider style={{ width: depth * 30 }} />
        <Box
          style={{
            width: "fit-content",
            borderRadius: 4,
            padding: "15px 20px",
            backgroundColor: isActived ? "#4f4f4f" : "#2f2f2f",
            position: "relative",
            borderLeft: `4px solid ${
              colorByDepth[depth % colorByDepth.length]
            }`,
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <Text>{node.title}</Text>
        </Box>
      </Group>
      {node.children?.map((child) => (
        <NodeComponent key={child.value} node={child} depth={depth + 1} />
      ))}
    </>
  );
});
