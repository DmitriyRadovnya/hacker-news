import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface HNItem {
  id: number;
  type: "story" | "comment" | "job" | "poll" | "pollopt";
  title: string;
  url: string;
  text?: string;
  by: string;
  time: number;
  score: number;
  descendants: number;
  kids: number[];
  parent?: number;
}

export const hnApi = createApi({
  reducerPath: "hnApi",
  tagTypes: ["Stories"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hacker-news.firebaseio.com/v0",
  }),
  endpoints: (builder) => ({
    getNewItems: builder.query<number[], void>({
      query: () => "/newstories.json",
      transformResponse: (res: number[]) => res.slice(0, 100),
      providesTags: ["Stories"],
    }),
    getItem: builder.query<HNItem, number>({
      query: (id) => `/item/${id}.json`,
    }),
  }),
});

export const { useGetNewItemsQuery, useGetItemQuery } = hnApi;
