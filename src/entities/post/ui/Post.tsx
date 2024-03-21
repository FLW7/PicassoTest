import { Link } from 'react-router-dom';
import { Card, Flex, Typography } from 'antd';
import { IPostProps } from '@/entities/post/index';

const { Title, Paragraph } = Typography;

function Post({ title, body }: IPostProps) {
  return (
    <Card style={{ marginTop: '20px' }}>
      <Flex vertical align="flex-start">
        <Link type="link" to="/PicassoTest/">
          Назад
        </Link>
        <Flex
          style={{ padding: '20px' }}
          justify="space-between"
          vertical
          align="flex-start"
        >
          <Title>{title}</Title>
          <Paragraph>{body}</Paragraph>
        </Flex>
      </Flex>
    </Card>
  );
}

export default Post;
