import { Container, styled } from "@mui/material";

export const HomeContainer = styled(Container)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 250px",
  columnGap: theme.spacing(4),
}));
