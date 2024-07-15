import useSWR from "swr";
import { User } from "../engine/core/store/models/User";
import { APIArticle } from "./article";
import { APIImage } from "./image";
import { APIProblemTemplate } from "./problemTemplate";
import { APIVideo } from "./video";
import { apiClient } from "../utils/apiClient";
import { APIBookContent } from "./bookContent";

export type APIBook = {
  id: string;
  title: string;
  desc: string;
  shortDesc: string;
  coverImageUrl: string;
  createdAt: string;
  updatedAt: string;
  bookContent: APIBookContent;

  videos: APIVideo[];
  images: APIImage[];
  articles: APIArticle[];
  problemTemplates: APIProblemTemplate[];

  owner: User;
};

export type GetBookDetailReqeust = {
  bookId: string;
};

export type GetBookDetailResponse = APIBook;

export const getBookWithDetail = async (
  req: GetBookDetailReqeust
): Promise<GetBookDetailResponse> => {
  const response = await apiClient.get(
    `/v1/qandanote/book/${req.bookId}/detail`
  );
  return response.data;
};

export const useBookWithDetail = ({ bookId }: GetBookDetailReqeust) => {
  const { data, error, mutate } = useSWR<APIBook, Error>(
    [`/v1/qandanote/book/${bookId}/detail`],
    () => getBookWithDetail({ bookId })
  );

  return {
    book: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export type GetBooksForAuthorResponse = APIBook[];

export const getBooksForAuthor =
  async (): Promise<GetBooksForAuthorResponse> => {
    const response = await apiClient.get(`/v1/qandanote/book/for-author`);
    return response.data;
  };

export const useBooksForAuthor = () => {
  const { data, error, mutate } = useSWR<APIBook[], Error>(
    [`/v1/qandanote/book/for-author`],
    getBooksForAuthor
  );

  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export type UpdateBookContentNodeRequest = {
  id: string;
  title: string;
  desc: string;
  videos: APIVideo[];
  images: APIImage[];
  articles: APIArticle[];
  problems: APIProblemTemplate[];
  children: UpdateBookContentNodeRequest[];
};

export type UpdateBookRequest = {
  bookId: string;
  title: string;
  desc: string;
  shortDesc: string;
  coverImageUrl: string;
  bookContent: UpdateBookContentNodeRequest;
};

export type UpdateBookResponse = APIBook;

export const updateBook = async (
  req: UpdateBookRequest
): Promise<UpdateBookResponse> => {
  const response = await apiClient.put(`/v1/qandanote/book/${req.bookId}`, req);
  return response.data;
};
