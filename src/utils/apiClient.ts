import axios from "axios";

export const apiClient = axios.create({
  // baseURL: 'https://random.gg/api',
  baseURL: import.meta.env.PROD
    ? "https://random.gg/api"
    : "http://localhost:4000/api",
  withCredentials: true,
});

export const fetcher = (url: string) =>
  apiClient.get(url).then((res) => res.data);
