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

            <a class="" href="/about">
              about
            </a>
          </span>
        </header>
        <h1>Arkyv</h1>
        <h3>Download</h3>
        <div class="posts">
          <ul class="post">
            <li class="post-title">
              Demo #1
              <a href="https://drive.google.com/uc?export=download&id=19EFDRHGDCCH6XeKuHtVfXMhQLkb3FAjK">
                [audio]
              </a>{" "}
              |{" "}
              <a href="https://drive.google.com/uc?export=download&id=1WKJlAdsI8YuI7dikxAhd1lFMvToxdBUJ">
                [text]
              </a>
            </li>
            <li class="post-title">
              Demo #2
              <a href="https://filelu.cloud/OQmvrB3P3m8vS42h/Lion-King.opus">
                [audio]
              </a>{" "}
              |{" "}
              <a href="https://filelu.cloud/dEkysxT5212tJNKZ/demo2.pdf">
                [text]
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
});
