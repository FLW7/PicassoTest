import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post, postApi } from '@/entities/post/index';

function PostBlock() {
  const { id } = useParams();
  const [postId, setPostId] = useState<number>(0);

  useEffect(() => {
    if (id) {
      setPostId(parseInt(id, 10));
    }
  }, [id]);

  const { data } = postApi.useGetPostByIdQuery(postId, {
    skip: postId === 0,
  });

  return <Post title={data ? data.title : ''} body={data ? data.body : ''} />;
}

export default PostBlock;
