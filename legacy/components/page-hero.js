(function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  const heroMounts = document.querySelectorAll('[data-page-hero]');
  if (!heroMounts.length) return;

  heroMounts.forEach((mount) => {
    const heroClass = mount.getAttribute('data-hero-class');
    const heroTitle = mount.getAttribute('data-hero-title');

    if (!heroClass || !heroTitle) return;

    mount.outerHTML =
      '<section class="' +
      escapeHtml(heroClass) +
      '">' +
      '<div id="site-navbar"></div>' +
      '<h1>' +
      escapeHtml(heroTitle) +
      '</h1>' +
      '</section>';
  });
})();
