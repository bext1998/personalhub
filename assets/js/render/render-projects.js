const tagsTemplate = (tags) =>
  tags.map((tag) => `<li class="badge">${tag}</li>`).join('');

const projectCardTemplate = ({ title, description, href, tags, status }) => `
  <article class="card projects-card fade-in">
    <div class="card__title-row">
      <h3>${title}</h3>
      <span class="badge">${status}</span>
    </div>
    <p class="card__description">${description}</p>
    <ul class="card__meta">${tagsTemplate(tags)}</ul>
    <div class="card__footer">
      <a class="button" href="${href}">View project</a>
    </div>
  </article>
`;

export function renderProjects(projects, mountPoint) {
  if (!mountPoint) return;
  mountPoint.innerHTML = projects.map(projectCardTemplate).join('');
}
