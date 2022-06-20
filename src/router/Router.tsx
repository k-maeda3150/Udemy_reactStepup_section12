import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Home, HomeLayout } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="setting" element={<Setting />} />
        <Route path="user_management" element={<UserManagement />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
