export const getBookIdFromQuery = () => {
  const url = new URL(window.location.href);
  const bookId = url.searchParams.get("bookId");

  if (!bookId) {
    throw new Error("bookId is not found in query");
  }

  return bookId;
};
