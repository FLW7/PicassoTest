import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../feed/model/feed.types';

export const postApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPostById: builder.query<IPost, number>({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
  reducerPath: 'postApi',
});
