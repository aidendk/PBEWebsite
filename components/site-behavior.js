(function () {
  function initSiteBehavior() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-btn');
    const links = document.querySelectorAll('.nav-links li a');
    const backToTopButton = document.getElementById('back-to-top');

    const closeMobileMenu = () => {
      if (!hamburger || !navLinks) return;
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.classList.remove('change');
      document.body.classList.remove('nav-open');
    };

    const toggleMobileMenu = () => {
      if (!hamburger || !navLinks) return;
      const isOpen = navLinks.classList.toggle('active');
      hamburger.classList.toggle('active', isOpen);
      hamburger.classList.toggle('change', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
    };

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', toggleMobileMenu);
    }

    if (closeBtn && hamburger && navLinks) {
      closeBtn.addEventListener('click', closeMobileMenu);
    }

    if (links.length && hamburger && navLinks) {
      links.forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
      });
    }

    if (navLinks) {
      navLinks.addEventListener('click', (event) => {
        if (event.target === navLinks) closeMobileMenu();
      });
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMobileMenu();
    });

    if (backToTopButton) {
      const onScroll = () => {
        const shouldShow =
          document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
        backToTopButton.style.display = shouldShow ? 'block' : 'none';
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteBehavior);
  } else {
    initSiteBehavior();
  }
})();
