import { FC } from "react";
import { Box } from "@mui/material";
import { ArticleList, TagList } from "../../components";
import { HomeContainer } from "./Home.style";

import { articles } from "../../mock/articles";

const Home: FC = () => {
  return (
    <HomeContainer>
      <ArticleList articles={articles} />
      <Box component="aside">
        <TagList title="Popular Tags" />
      </Box>
    </HomeContainer>
  );
};

export default Home;
