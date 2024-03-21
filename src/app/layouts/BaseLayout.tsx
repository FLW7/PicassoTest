import { Route, Routes } from 'react-router-dom';
import Main from '@/pages/FeedPage';
import PostPage from '@/pages/PostPage';

export default function BaseLayout() {
  return (
    <Routes>
      <Route path="/PicassoTest/" element={<Main />} />
      <Route path="/PicassoTest/post/:id" element={<PostPage />} />
      <Route path="/PicassoTest/*" element={<h1>Not found page</h1>} />
    </Routes>
  );
}
