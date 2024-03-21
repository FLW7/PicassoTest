import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetPostsArgs, IPost } from '../model/feed.types';

export const feedApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getFeedPosts: builder.query<IPost[], IGetPostsArgs>({
      query: ({ limit, page }) => ({
        url: `/posts`,
        params: {
          _limit: limit,
          _page: page,
        },
      }),
    }),
  }),
  reducerPath: 'feedApi',
});

// export const { useGetFeedPostsQuery } = feedApi;
