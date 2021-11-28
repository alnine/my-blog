import { FC } from "react";
import { styled } from "@mui/material";
import { Header } from "./header";

const Layout = styled("div")(() => ({
  minHeight: "100vh",
}));

const Root: FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      <main>{children}</main>
    </Layout>
  );
};

export default Root;
