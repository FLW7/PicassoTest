import { Link } from 'react-router-dom';
import { List } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { IPostCardProps } from '@/entities/feed/index';

function FeedCard({ item }: IPostCardProps) {
  return (
    <List.Item
      actions={[
        <Link key="list-loadmore-edit" to={`/PicassoTest/post/${item.id}`}>
          Просмотр
        </Link>,
      ]}
    >
      <List.Item.Meta
        title={`${item.id}. ${item.title}`}
        description={<Paragraph ellipsis={{ rows: 2 }}>{item.body}</Paragraph>}
      />
    </List.Item>
  );
}

export default FeedCard;
