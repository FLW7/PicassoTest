import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { feedApi } from '@/entities/feed/api/feed.api';
import { postApi } from '@/entities/post/api/post.api';

const rootReducer = combineReducers({
  [feedApi.reducerPath]: feedApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(feedApi.middleware, postApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
