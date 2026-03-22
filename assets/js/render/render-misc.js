const heroMetaTemplate = ({ label, value }) => `
  <article class="hero__meta-card fade-in">
    <span class="hero__meta-label">${label}</span>
    <p class="hero__meta-value">${value}</p>
  </article>
`;

const miscCardTemplate = ({ title, description }) => `
  <article class="card misc-card fade-in">
    <h3>${title}</h3>
    <p class="card__description">${description}</p>
  </article>
`;

const aboutTemplate = (paragraph) => `<p>${paragraph}</p>`;

const footerMetaTemplate = ({ label, value }) => `<li><strong>${label}:</strong> ${value}</li>`;

export function renderHeroMeta(items, mountPoint) {
  if (!mountPoint) return;
  mountPoint.innerHTML = items.map(heroMetaTemplate).join('');
}

export function renderMisc(items, mountPoint) {
  if (!mountPoint) return;
  mountPoint.innerHTML = items.map(miscCardTemplate).join('');
}

export function renderAbout(paragraphs, mountPoint) {
  if (!mountPoint) return;
  mountPoint.innerHTML = paragraphs.map(aboutTemplate).join('');
}

export function renderFooter(footer, mountPoint, siteName) {
  if (!mountPoint) return;
  mountPoint.innerHTML = `
    <div class="site-footer__copy">
      <strong>${siteName}</strong>
      <p>${footer.note}</p>
    </div>
    <ul class="footer-list">
      ${footer.metadata.map(footerMetaTemplate).join('')}
    </ul>
  `;
}
