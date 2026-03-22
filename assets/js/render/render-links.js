const linkCardTemplate = ({ platform, url, description }, labels) => {
  const isExternal = /^https?:/i.test(url);
  const targetAttrs = isExternal ? ' target="_blank" rel="noreferrer"' : '';

  return `
    <article class="card links-card fade-in">
      <div class="card__title-row">
        <h3>${platform}</h3>
        <span class="badge link">${platform}</span>
      </div>
      <p class="card__description">${description}</p>
      <div class="card__footer">
        <a class="button" href="${url}"${targetAttrs}>${labels.openLink}</a>
      </div>
    </article>
  `;
};

export function renderLinks(links, mountPoint, labels) {
  if (!mountPoint) return;
  mountPoint.innerHTML = links.map((link) => linkCardTemplate(link, labels)).join('');
}
