import { BookOutlined, GithubOutlined } from "@ant-design/icons";
import { Layout as AntLayout, Button } from "antd";
import { Typography } from "antd";
import { Outlet, useNavigate } from "react-router";

const { Header, Content } = AntLayout;

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const Layout = () => {
  const nav = useNavigate();
  return (
    <AntLayout>
      <Header style={headerStyle}>
        <Button onClick={() => nav("/")}></Button>
        <Button onClick={() => nav(":3")}></Button>

        <BookOutlined style={{ fontSize: 34, color: "white" }} />
        <Typography style={{ fontSize: 34, color: "white" }}>
          Hacker News
        </Typography>
        <GithubOutlined style={{ fontSize: 34, color: "white" }} />
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </AntLayout>
  );
};
