import React from "react";
import Loadable from "react-loadable";
import { AdminLayout, UserLayout } from "./containers";

function Loading() {
  return <div>Loading...</div>;
}
const Home = Loadable({
  loader: () => import("./views/UserViews/Home"),
  loading: Loading,
});
const SendReport = Loadable({
  loader: () => import("./views/UserViews/SendReport"),
  loading: Loading,
});
const ViewReport = Loadable({
  loader: () => import("./views/UserViews/ViewReport"),
  loading: Loading,
});
const FAQ = Loadable({
  loader: () => import("./views/UserViews/FAQ"),
  loading: Loading,
});
// Admin
const Dashboard = Loadable({
  loader: () => import("./views/AdminViews/Dashboard"),
  loading: Loading,
});
const Users = Loadable({
  loader: () => import("./views/AdminViews/Users"),
  loading: Loading,
});
const Reports = Loadable({
  loader: () => import("./views/AdminViews/Reports"),
  loading: Loading,
});
const Posts = Loadable({
  loader: () => import("./views/AdminViews/Posts"),
  loading: Loading,
});
const routes = [
  { path: "/", name: "24h Report", component: UserLayout, exact: true },
  { path: "/home", name: "Trang chủ", component: Home },
  {
    path: "/sendReport",
    name: "Gửi báo cáo",
    component: SendReport,
  },
  {
    path: "/viewReport",
    name: "Xem phản hồi",
    component: ViewReport,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminLayout,
    exact: true,
  },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/users", name: "Users", component: Users },
  { path: "/reports", name: "Reports", component: Reports },
  { path: "/posts", name: "Posts", component: Posts },
];
export default routes;
