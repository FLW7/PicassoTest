export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  loading: boolean;
}

export interface IPostCardProps {
  item: IPost;
}

export interface IGetPostsArgs {
  limit: number;
  page: number;
}
