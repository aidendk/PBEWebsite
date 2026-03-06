(function () {
  const homeHeroMount = document.querySelector('[data-home-hero]');
  if (!homeHeroMount) return;

  homeHeroMount.outerHTML = `
    <section class="header">
      <div id="site-navbar"></div>

      <div class="announcement-bar">
        <a
          href="https://forms.gle/3GKhfcA6sTAFL2wd7"
          target="_blank"
          rel="noopener"
          class="golf-btn"
        >
          PBE Classic Golf Tournament
        </a>
      </div>
    </section>
  `;
})();
