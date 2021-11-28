import { FC } from "react";
import { Typography } from "@mui/material";
import { StyledTagList } from "./Tag.styled";

interface IProps {
  title: string;
  tags?: unknown[];
}

const TagList: FC<IProps> = ({ title, tags = [] }) => {
  return (
    <StyledTagList>
      <Typography variant="subtitle1" component="h3">
        {title}
      </Typography>
      {tags.length === 0 && <Typography>Not tags are here... yet.</Typography>}
    </StyledTagList>
  );
};

export default TagList;
