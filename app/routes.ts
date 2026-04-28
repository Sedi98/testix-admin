import {
  type RouteConfig,
  layout,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  index("routes/_auth/login.tsx"),

  layout("components/layout/Shell.tsx", [
    route("/dashboard", "routes/dashboard/index.tsx"),
    route("/dashboard/exams", "routes/admin/index.tsx"),
  ]),
] satisfies RouteConfig;
