(function () {
  const footerMount = document.getElementById('site-footer');
  if (!footerMount) return;

  const year = new Date().getFullYear();

  footerMount.innerHTML = `
    <section class="footer">
      <div class="social-links">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://www.instagram.com/pbetamu" target="_blank" rel="noopener"><img src="PBEimages/insta.png" alt="Instagram"></a></li>
          <li><a href="https://www.linkedin.com/company/pbe-tamu/" target="_blank" rel="noopener"><img src="PBEimages/linkedin.png" alt="LinkedIn"></a></li>
        </ul>

        <h3>Want to reach out?</h3>
        <ul class="contact">
          <li><a href="./contact">Contact Us</a></li>
        </ul>
      </div>

      <div class="copyright">
        <p>&copy; ${year} PBE</p>
      </div>
    </section>
  `;
})();
