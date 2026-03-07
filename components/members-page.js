(function () {
  const root = document.getElementById('members-page-content');
  const data = window.PBE_MEMBERS;
  if (!root || !data) return;

  function renderCard(member, index) {
    const eager = index < 4 ? 'eager' : 'lazy';
    const priority = index < 2 ? 'high' : 'auto';

    const mailHtml = member.email
      ? `<a href="mailto:${member.email}" class="mail-icon"><img src="PBEimages/mail.png" alt="Mail" class="icon" loading="lazy" decoding="async"></a>`
      : '';

    const linkedinHtml = member.linkedin
      ? `<a href="${member.linkedin}" class="linkedin-icon"><img src="PBEimages/linkedin.png" alt="LinkedIn" loading="lazy" decoding="async"></a>`
      : '';

    return `
      <div class="member-item">
        <div class="image-container">
          <img src="${member.image}" alt="${member.name}" loading="${eager}" decoding="async" fetchpriority="${priority}">
          ${mailHtml}
          ${linkedinHtml}
        </div>
        <div class="member-info">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
        </div>
      </div>
    `;
  }

  function renderSection(title, members) {
    return `
      <section class="member">
        <div>
          <h1>${title}</h1>
          <div class="member-container">
            ${members.map((m, i) => renderCard(m, i)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  const officersSorted = [...data.officers].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  root.innerHTML =
    renderSection('Executive Team', data.executive) +
    renderSection('Officer Team', officersSorted);
})();
