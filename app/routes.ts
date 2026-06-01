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
    route("/create-exam", "routes/admin/create-exam/create-exam.tsx"),
    route(
      "/create-exam/exam-parameters",
      "routes/admin/create-exam/exam-parameters.tsx",
    ),
    route(
      "/create-exam/exam-questions",
      "routes/admin/create-exam/exam-questions.tsx",
    ),
    route(
      "/create-exam/exam-summary",
      "routes/admin/create-exam/exam-summary.tsx",
    ),
  ]),
] satisfies RouteConfig;
