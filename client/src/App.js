import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WithLayout from "WithLayout";

import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
import Notifications from "./views/Notifications/Notifications";

import { Main as MainLayout, Dashboard as DashboardView } from "./layouts";

import { LoginSimple as LoginView } from "./views/authPages";

// Landing pages
import {
  Home as HomeView,
} from "./views/landingPages";


import "react-lazy-load-image-component/src/effects/blur.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

import "scss/react-images.scss";
import "scss/slick-slider.scss";

// const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
