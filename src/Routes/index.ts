import Dashboard from "@/pages/Dashboard";
import requireAuth from "@/Routes/requireAuth";
import { Login } from "@/pages/login";
import User from "@/pages/User";
import Category from "@/pages/Category";
import UploadVideo from "@/pages/Videos";

const adminRoutes = [
  {
    path: "/",
    exact: true,
    component: requireAuth(Dashboard),
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/user",
    exact: true,
    component: requireAuth(User),
  },
  {
    path: "/category",
    exact: true,
    component: requireAuth(Category),
  },
  {
    path: "/uploadVideo",
    exact: true,
    component: requireAuth(UploadVideo),
  },
];

export default adminRoutes;
