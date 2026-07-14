(function () {
  const navbarMount = document.getElementById('site-navbar');
  if (!navbarMount) return;

  navbarMount.innerHTML = `
    <nav>
      <div class="logo-container">
        <a href="./"><img src="PBEimages/PBETransparentdark.png" alt="Logo"></a>
      </div>

      <div class="hamburger">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>

      <div class="nav-links">
        <button class="close-btn" type="button">&times;</button>
        <ul>
          <li><a href="./about">About Us</a></li>
          <li><a href="./members">Members</a></li>
          <li><a href="./philanthropy">Philanthropy</a></li>
          <li class="desktop-only">
            <a href="./"><img src="PBEimages/PBETransparentdark.png" alt="Logo"></a>
          </li>
          <li><a href="./recruitment">Recruitment</a></li>
          <li><a href="./sponsors">Sponsors</a></li>
          <li><a href="./login">Login Portal</a></li>
        </ul>
      </div>
    </nav>
  `;
})();
