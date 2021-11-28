import { FC } from "react";

import Article from "./Article";
import { StyledArticleList } from "./Atricle.styled";
import { IArticle } from "../../types/article";

interface IProps {
  articles: IArticle[];
}

const ArticleList: FC<IProps> = ({ articles }) => {
  return (
    <StyledArticleList>
      {articles.map((article: IArticle) => (
        <Article {...article} />
      ))}
    </StyledArticleList>
  );
};

export default ArticleList;
