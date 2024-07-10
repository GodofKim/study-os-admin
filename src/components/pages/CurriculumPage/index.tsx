import { observer } from "mobx-react-lite";
import { NodeComponent } from "./NodeComponent";
import { SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useRootStore } from "../../../hooks/useStore";

// ✅ Valid data, all values are unique
const data = [
  {
    value: "src",
    label: "src",
    children: [
      { value: "src/components", label: "components" },
      { value: "src/hooks1", label: "hooks" },
      { value: "src/hooks2", label: "hooks" },
      {
        value: "src/hooks3",
        label: "hooks",
        children: [
          {
            value: "src/hooks/useStore.ts",
            label: "useStore.ts",
          },
        ],
      },
    ],
  },
  { value: "package.json", label: "package.json" },
];

const getNodeByValue = (
  value: string
): { value: string; label: string } | undefined => {
  const findNode = (nodes: typeof data, value: string) => {
    for (const node of nodes) {
      if (node.value === value) {
        return node;
      }
      if (node.children) {
        const found = findNode(node.children, value);
        if (found) {
          return found;
        }
      }
    }
  };

  const result = findNode(data, value);

  return result;
};

export const CurriculumPage = observer(() => {
  const { uiStore } = useRootStore();

  const { selectedCurriculumNodeValue } = uiStore;

  const selectedNode = getNodeByValue(selectedCurriculumNodeValue);

  return (
    <SimpleGrid cols={2} style={{ height: "100%" }}>
      <Stack
        p={20}
        style={{
          borderRight: "1px solid #4a4a4a",
          height: "100%",
          overflowY: "auto",
        }}
      >
        <Stack gap="xs">
          <Title order={4}>목차</Title>
          <Text size="sm">각 항목을 클릭해서 콘텐츠를 추가하세요.</Text>
        </Stack>
        <Stack gap={4}>
          {data.map((node) => (
            <NodeComponent key={node.value} node={node} depth={0} />
          ))}
        </Stack>
      </Stack>
      {selectedNode && (
        <Stack p={20} style={{ height: "100%", overflowY: "auto" }}>
          <Stack gap="xs">
            <Title order={4}>{selectedNode.label}</Title>
            <Text size="sm">항목을 클릭해서 콘텐츠를 추가하세요.</Text>
          </Stack>
          <Stack gap={4}></Stack>
        </Stack>
      )}
    </SimpleGrid>
  );
});
