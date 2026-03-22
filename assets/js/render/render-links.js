const linkCardTemplate = ({ title, url, description, badge }) => `
  <article class="card links-card fade-in">
    <div class="card__title-row">
      <h3>${title}</h3>
      <span class="badge">${badge}</span>
    </div>
    <p class="card__description">${description}</p>
    <div class="card__footer">
      <a class="button" href="${url}">Open link</a>
    </div>
  </article>
`;

export function renderLinks(links, mountPoint) {
  if (!mountPoint) return;
  mountPoint.innerHTML = links.map(linkCardTemplate).join('');
}
