import { AppBar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: `${theme.spacing(2)} 0`,
}));

export const Logo = styled("div")(({ theme }) => ({
  marginRight: "auto",
  fontSize: 22,
  fontWeight: theme.typography.fontWeightBold,
}));
