import { observer } from "mobx-react-lite";
import { useBooksForAuthor } from "../../../api/book";
import { Grid, LoadingOverlay } from "@mantine/core";
import { BookCard } from "./BookCard";

export const HomePage = observer(() => {
  const { books, isLoading } = useBooksForAuthor();

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 60px)",
        position: "relative",
      }}
    >
      {isLoading ? (
        <LoadingOverlay />
      ) : (
        <Grid>
          {books?.map((book) => (
            <Grid.Col span={3}>
              <BookCard key={book.id} book={book} />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </div>
  );
});
