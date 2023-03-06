import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validateAuthSession } from "../store/auth";

import {
  AccountsPage,
  DashboardPage,
  ProfilePage,
  TeamsPage,
  UsersPage,
  LoginPage,
} from "../pages";

import { PrivatesRoutes } from "./PrivatesRoutes";
import TeamPageShow from "../pages/Teams/Show";
import TeamPageEdit from "../pages/Teams/Edit";

export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validateAuthSession());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivatesRoutes />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/teams/:teamId" element={<TeamPageShow />} />
          <Route path="/teams/:teamId/edit" element={<TeamPageEdit />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
