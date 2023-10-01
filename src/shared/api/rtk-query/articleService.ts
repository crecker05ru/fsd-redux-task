import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IArticle } from "../models";

interface IParams {
  _limit?: number;
  _page?: number;
}
export const articlesrtkApi = createApi({
  reducerPath: "articlesrtkAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    fetchArticles: build.query<IArticle[], IParams>({
      query: ({ _limit = 10, _page = 1 }) => ({
        url: "/posts",
        params: {
          _limit,
          _page,
        },
      }),
    }),
    fetchArticleById: build.query<IArticle, string>({
      query: (id: string = "1") => ({
        url: `posts/${id}`,
      }),
    }),
  }),
});
