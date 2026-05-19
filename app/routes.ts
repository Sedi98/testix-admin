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
    route("/categories", "routes/dashboard/categories.tsx"),
    route("/subjects/:categoryId", "routes/dashboard/categories/subjects.tsx"),
    route("/topics/:subjectId", "routes/dashboard/categories/topics.tsx"),
    route("/drafts", "routes/dashboard/drafts.tsx"),
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
    route("/dashboard/students", "routes/dashboard/students.tsx"),
    route("/dashboard/teachers", "routes/dashboard/teachers.tsx"),
    route("/dashboard/parents", "routes/dashboard/parents.tsx"),
    route("/dashboard/results", "routes/dashboard/results.tsx"),
    route("/dashboard/classes", "routes/dashboard/classes.tsx"),
    route("/dashboard/coins", "routes/dashboard/coins.tsx"),
    route("/dashboard/plans", "routes/dashboard/plans.tsx"),
    route("/dashboard/notifications", "routes/dashboard/notifications.tsx"),
    route("/dashboard/chatbot", "routes/dashboard/chatbot.tsx"),
    route("/dashboard/settings", "routes/dashboard/settings.tsx"),
    route("/dashboard/blog", "routes/dashboard/blog.tsx"),
    route("/dashboard/faq", "routes/dashboard/faq.tsx"),
  ]),
] satisfies RouteConfig;
