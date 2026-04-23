import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // Tell React Router to use our custom routes.ts file
  async routes() {
    return (await import("./app/routes")).default;
  },
} satisfies Config;
