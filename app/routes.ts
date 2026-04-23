import {
  type RouteConfig,
  layout,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  route("/login", "routes/_auth/login.tsx"),

  layout("components/layout/Shell.tsx", [index("routes/dashboard/index.tsx")]),
] satisfies RouteConfig;
