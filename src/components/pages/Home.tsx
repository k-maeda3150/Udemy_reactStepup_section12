import { memo, VFC } from "react";
import { Outlet } from "react-router-dom";

export const Home: VFC = memo(() => {
  return <p>Home画面です。。</p>;
});

export const HomeLayout: VFC = () => <Outlet />;
