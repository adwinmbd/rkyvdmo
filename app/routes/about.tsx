import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <main class="page-content" aria-label="Content">
      <div class="w">
        <header>
          <span class="menu">
            <a class="" href="/">
              home
            </a>

            <a class="" href="/about.html">
              about
            </a>
          </span>
        </header>

        <div>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            pretium neque id iaculis pulvinar. Pellentesque eget lectus iaculis,
            facilisis ligula et, mattis sem. Nam et lorem in leo efficitur
            lacinia vel id lacus. Nunc ac quam auctor, bibendum risus eu,
            vehicula mi. Vestibulum eget leo ut dolor cursus gravida. Sed vitae
            ligula egestas, viverra sapien id, tempor lorem. Suspendisse
            potenti.
          </p>
          <p>
            Donec nibh turpis, rhoncus nec convallis et, hendrerit id mauris.
            Duis eu interdum ex, nec scelerisque leo. Quisque ullamcorper tortor
            enim, non feugiat turpis pulvinar vel. Integer vitae eros lorem. Nam
            ornare facilisis est ac scelerisque. Etiam eu dui et ex rhoncus
            laoreet. Sed id blandit est, nec sodales arcu. Donec blandit ligula
            a leo congue, ut viverra arcu accumsan.
          </p>
        </div>
      </div>
    </main>
  );
});
