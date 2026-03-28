const navTemplate = ({ label, href }) => `<a class="nav-link" href="${href}">${label}</a>`;

const heroActionsTemplate = (cta) => `
  <a class="button-link" href="${cta.primary.href}">${cta.primary.label}</a>
  <a class="button-link secondary" href="${cta.secondary.href}">${cta.secondary.label}</a>
`;

const aboutTemplate = (paragraph) => `<p>${paragraph}</p>`;

function formatDateZhTw(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;

  const [, year, month, day] = match;
  return `${year} 年 ${Number(month)} 月 ${Number(day)} 日`;
}

export function renderNavigation(items, mountPoint) {
  if (!mountPoint) return;
  mountPoint.innerHTML = items.map(navTemplate).join('');
}

export function renderHeroActions(cta, mountPoint) {
  if (!mountPoint) return;
  mountPoint.innerHTML = heroActionsTemplate(cta);
}

export function renderAbout(paragraphs, mountPoint) {
  if (!mountPoint) return;
  mountPoint.innerHTML = paragraphs.map(aboutTemplate).join('');
}

export function renderFooter(footer, mountPoint, labels) {
  if (!mountPoint) return;
  mountPoint.innerHTML = `
    <div>
      <h2>${footer.siteName}</h2>
      <p class="muted">${footer.copyright}</p>
    </div>
    <div class="footer-links" aria-label="頁尾連結">
      <a class="external-link" href="${footer.githubUrl}" target="_blank" rel="noreferrer">
        ${labels.github}
        <span aria-hidden="true">↗</span>
        <span class="external-label">${footer.githubUrl}</span>
      </a>
      <div class="external-link">
        ${labels.updated}
        <span class="external-label">${formatDateZhTw(footer.updatedDate)}</span>
      </div>
    </div>
  `;
}
