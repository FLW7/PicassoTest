import { useState, useRef, useEffect, useMemo } from 'react';
import { Divider, List } from 'antd';
import { FeedCard, feedApi, IPost } from '@/entities/feed/index';

function PostsList() {
  const limit = 10;
  const [list, setList] = useState<IPost[]>([]);
  const [page, setPage] = useState<number>(1);
  const [allPostsLoaded, setAllPostsLoaded] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const endOfListRef = useRef<HTMLDivElement>(null);

  const { isLoading, isFetching, currentData } = feedApi.useGetFeedPostsQuery(
    {
      limit,
      page,
    },
    { skip: allPostsLoaded },
  );

  useEffect(() => {
    if (!isFetching && currentData) {
      setList([...list, ...currentData]);
      if (currentData.length === 0) {
        setAllPostsLoaded(true);
      } else {
        setAllPostsLoaded(false);
      }
    }
  }, [currentData, isFetching]);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting && !isLoading && list.length > 0) {
        setPage((prev) => prev + 1);
      }
    });

    if (observer.current && endOfListRef.current) {
      observer.current.observe(endOfListRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [isLoading, list.length]);

  const loadMoreTrigger = useMemo(
    () => <div ref={endOfListRef} style={{ height: '20px' }} />,
    [],
  );

  return (
    <>
      <List
        loading={isLoading || isFetching}
        itemLayout="vertical"
        loadMore={
          !allPostsLoaded && (isLoading || isFetching) ? null : loadMoreTrigger
        }
        dataSource={list}
        renderItem={(item) => <FeedCard item={item} />}
      />
      {allPostsLoaded ? <Divider>Все посты загружены</Divider> : null}
    </>
  );
}
export default PostsList;
