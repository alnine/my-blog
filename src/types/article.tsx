export interface IArticle {
  title: string;
  subtitle: string;
  user: string;
  date: string;
  likesCount: number;
  isLiked?: boolean;
}
