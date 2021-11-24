import React from "react";
import { Route, Routes } from "react-router-dom";
import WithLayout from "WithLayout";

import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
import Notifications from "./views/Notifications/Notifications";

// import dashboardRoutes from "./layouts/Dashboard/Routes";

// Available layouts
import { Main as MainLayout, Dashboard as DashboardLayout } from "./layouts";

// Landing pages
import {
  Home as HomeView,
  Dashboard as DashboardView
} from "./views/landingPages";

import { LoginSimple as LoginView } from "./views/authPages";

const IRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<WithLayout component={HomeView} layout={MainLayout} />}
      />

      <Route
        path="/login"
        element={<WithLayout component={LoginView} layout={MainLayout} />}
      />

      <Route path="/admin" element={<DashboardView />}>
        <Route path="overview" element={<DashboardPage />} />
        <Route path="user" element={<UserProfile />} />
        <Route path="questions" element={<Notifications />} />
      </Route>
    </Routes>
  );
};

export default IRoutes;
{
  /* <Redirect to="/page-not-found" /> */
}
