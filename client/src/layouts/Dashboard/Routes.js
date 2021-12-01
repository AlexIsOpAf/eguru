// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Questions from "views/Questions/Questions";

const dashboardRoutes = [
  {
    path: "/overview",
    name: "Overview",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Course Content",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/questions",
    name: "Questions",
    icon: Notifications,
    component: Questions,
    layout: "/admin"
  }
];

export default dashboardRoutes;
