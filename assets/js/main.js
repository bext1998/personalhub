import { siteData } from './data/site-data.js';
import { renderLinks } from './render/render-links.js';
import { renderProjects } from './render/render-projects.js';
import {
  renderAbout,
  renderFooter,
  renderHeroActions,
  renderNavigation,
} from './render/render-misc.js';
import { setupInteractions } from './ui/interactions.js';

function setTextContent(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function setDocumentMetadata(data) {
  document.title = data.seo.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', data.seo.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', data.seo.title);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', data.seo.description);
}

function mountSiteContent() {
  setDocumentMetadata(siteData);

  setTextContent('[data-site-name]', siteData.siteName);
  setTextContent('[data-hero-eyebrow]', siteData.hero.eyebrow);
  setTextContent('[data-hero-title]', siteData.hero.title);
  setTextContent('[data-hero-subtitle]', siteData.hero.subtitle);
  setTextContent('[data-hero-description]', siteData.hero.description);

  setTextContent('[data-social-title]', siteData.sections.socialLinks.title);
  setTextContent('[data-social-description]', siteData.sections.socialLinks.description);
  setTextContent('[data-projects-title]', siteData.sections.featuredProjects.title);
  setTextContent('[data-projects-description]', siteData.sections.featuredProjects.description);
  setTextContent('[data-about-title]', siteData.sections.about.title);
  setTextContent('[data-about-description]', siteData.sections.about.description);

  renderNavigation(siteData.navigation, document.querySelector('[data-site-nav]'));
  renderHeroActions(siteData.hero.cta, document.querySelector('[data-hero-actions]'));
  renderLinks(siteData.socialLinks, document.querySelector('[data-links-grid]'), siteData.labels);
  renderProjects(siteData.featuredProjects, document.querySelector('[data-projects-grid]'), siteData.labels);
  renderAbout(siteData.about, document.querySelector('[data-about-copy]'));
  renderFooter(siteData.footer, document.querySelector('[data-footer-meta]'), siteData.labels);
}

mountSiteContent();
setupInteractions();
