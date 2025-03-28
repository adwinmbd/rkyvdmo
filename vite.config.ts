import ssg from "@hono/vite-ssg";
import mdx from "@mdx-js/rollup";
import honox from "honox/vite";
import build from "@hono/vite-build/deno";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

const entry = "./app/server.ts";
export default defineConfig({
  build: {
    manifest: true,
  },
  plugins: [
    build({ staticRoot: "dist" }),
    honox({
      client: { input: ["./app/site.css"] },
    }),
    ssg({ entry }),
    mdx({
      jsxImportSource: "hono/jsx",
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
  ],
});


