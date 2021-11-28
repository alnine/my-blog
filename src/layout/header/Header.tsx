import { FC } from "react";
import { Container } from "@mui/material";
import { Logo, StyledAppBar } from "./Header.style";

const Header: FC = () => {
  return (
    <StyledAppBar position="sticky">
      <Container>
        <Logo>My Blog</Logo>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
