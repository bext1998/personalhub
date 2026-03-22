const tagsTemplate = (typeTag) => `<li class="badge">${typeTag}</li>`;

const projectCardTemplate = ({ name, summary, link, typeTag, statusTag }, labels) => {
  const isExternal = /^https?:/i.test(link);
  const targetAttrs = isExternal ? ' target="_blank" rel="noreferrer"' : '';

  return `
    <article class="card projects-card fade-in">
      <div class="card__title-row">
        <h3>${name}</h3>
        <span class="badge">${statusTag}</span>
      </div>
      <p class="card__description">${summary}</p>
      <ul class="card__meta">${tagsTemplate(typeTag)}</ul>
      <div class="card__footer">
        <a class="button" href="${link}"${targetAttrs}>${labels.viewProject}</a>
      </div>
    </article>
  `;
};

export function renderProjects(projects, mountPoint, labels) {
  if (!mountPoint) return;
  mountPoint.innerHTML = projects.map((project) => projectCardTemplate(project, labels)).join('');
}
