import { styled } from "@mui/material";

export const StyledArticleList = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));
