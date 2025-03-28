import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";

export default jsxRenderer(({ children, title, frontmatter }) => {
  // const spath = Object.keys(import.meta.glob("/**/site-*.css", { eager: true }),)[0]?.replace("/dist", "");
  // const jpath = Object.keys(import.meta.glob("/**/client-*.js", { eager: true }),)[0]?.replace("/dist", "");
  /*
  const cssfyl = import.meta.env.PROD ? spath : "/app/site.css";
  const jsfyl = import.meta.env.PROD ? jpath : "/app/client.ts";
  */

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {<title>{title ?? frontmatter?.title ?? "ARKYV"}</title>}
        <Link href="/app/site.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
      </head>
      <body>{children}</body>
    </html>
  );
});

/*
<link href={cssfyl} rel="stylesheet" />
<script type="module" src={jsfyl} async></script>
*/
