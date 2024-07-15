import { Card, Image, Stack, Text, Title } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { APIBook } from "../../../api/book";
import { useRootStore } from "../../../hooks/useStore";

interface Props {
  book: APIBook;
}

export const BookCard = observer(({ book }: Props) => {
  const { uiStore } = useRootStore();

  const handleClick = () => {
    uiStore.setCurrentPage("main");
    uiStore.setSelectedBookId(book.id);

    // set bookId query param to URL
    const url = new URL(window.location.href);
    url.searchParams.set("bookId", book.id);
    window.history.pushState({}, "", url.toString());
  };

  return (
    <Card style={{ cursor: "pointer" }} onClick={handleClick}>
      <Card.Section>
        <Image src={book.coverImageUrl} alt={book.title} draggable={false} />
      </Card.Section>
      <Card.Section p={20}>
        <Stack gap={4}>
          <Title order={5}>{book.title}</Title>
          <Text size="sm">{book.shortDesc}</Text>
          <Text size="xs" c="gray">
            최종수정일: {new Date(book.updatedAt).toLocaleDateString()}
          </Text>
        </Stack>
      </Card.Section>
    </Card>
  );
});
