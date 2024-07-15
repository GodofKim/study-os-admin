import { observer } from "mobx-react-lite";
import { NodeComponent } from "./NodeComponent";
import {
  Button,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useRootStore } from "../../../hooks/useStore";
import {
  BookContentNode,
  BookContentNodeModel,
} from "../../../engine/core/store/models/BookContentNode";
import { updateBook, UpdateBookContentNodeRequest } from "../../../api/book";
import { useState } from "react";
import { shortId } from "../../../utils/shortid";

const getNodeByIdFromBookContentNodeTree = (
  id: string,
  node: BookContentNode
): BookContentNode | undefined => {
  if (node.id === id) {
    return node;
  }

  if (node.children) {
    for (const child of node.children) {
      const found = getNodeByIdFromBookContentNodeTree(id, child);
      if (found) {
        return found;
      }
    }
  }

  return undefined;
};

export const CurriculumPage = observer(() => {
  const { uiStore, bookStore } = useRootStore();

  const { selectedCurriculumNodeValue } = uiStore;
  const { currentBook } = bookStore;
  const [isUpdating, setIsUpdating] = useState(false);

  if (!currentBook || !currentBook.bookContent?.value) {
    return <div>Book not found.</div>;
  }

  const selectedNode = getNodeByIdFromBookContentNodeTree(
    selectedCurriculumNodeValue,
    currentBook?.bookContent.value
  );

  const handleUpdate = async () => {
    if (!currentBook || !currentBook.bookContent) {
      return;
    }

    setIsUpdating(true);

    try {
      await updateBook({
        bookId: currentBook.id,
        title: currentBook.title,
        shortDesc: currentBook.shortDesc,
        desc: currentBook.desc,
        coverImageUrl: currentBook.coverImageUrl,
        bookContent: currentBook.bookContent
          .value as unknown as UpdateBookContentNodeRequest,
      });
    } catch (error) {
      alert("Failed to update book.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleAddChildNode = () => {
    if (!selectedNode) {
      return;
    }

    const newNode = BookContentNodeModel.create({
      id: shortId(),
      title: "새로운 노드",
      desc: "",
    });

    selectedNode.addChild(newNode);
  };

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
          <Group justify="flex-end" mb="lg">
            <Text>변경사항이 있습니다.</Text>
            <Button onClick={handleUpdate} loading={isUpdating}>
              저장하기
            </Button>
          </Group>
          <Title order={4}>목차</Title>
          <Text size="sm">각 항목을 클릭해서 콘텐츠를 추가하세요.</Text>
        </Stack>
        <Stack gap={4}>
          <NodeComponent
            key={currentBook.id}
            node={currentBook.bookContent.value}
            depth={0}
          />
        </Stack>
      </Stack>
      {selectedNode && (
        <Stack p={20} style={{ height: "100%", overflowY: "auto" }}>
          <Stack gap="xs">
            <Title order={4}>{selectedNode.title}</Title>
            <Text size="sm">항목을 클릭해서 콘텐츠를 추가하세요.</Text>
          </Stack>
          <Stack gap={4}>
            <Button onClick={handleAddChildNode}>자식 노드 추가</Button>
            <TextInput
              value={selectedNode.title}
              onChange={(e) => {
                selectedNode.setTitle(e.currentTarget.value);
              }}
              label="제목"
            />
          </Stack>
        </Stack>
      )}
    </SimpleGrid>
  );
});
