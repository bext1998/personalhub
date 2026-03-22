import { siteData } from './data/site-data.js';
import { renderLinks } from './render/render-links.js';
import { renderProjects } from './render/render-projects.js';
import {
  renderAbout,
  renderFooter,
  renderHeroMeta,
  renderMisc,
} from './render/render-misc.js';
import { setupInteractions } from './ui/interactions.js';

function mountSiteContent() {
  const siteName = document.querySelector('[data-site-name]');
  const siteTitle = document.querySelector('[data-site-title]');
  const siteTagline = document.querySelector('[data-site-tagline]');
  const siteIntro = document.querySelector('[data-site-intro]');

  if (siteName) siteName.textContent = siteData.siteName;
  if (siteTitle) siteTitle.textContent = siteData.siteName;
  if (siteTagline) siteTagline.textContent = siteData.tagline;
  if (siteIntro) siteIntro.textContent = siteData.intro;

  renderHeroMeta(siteData.heroMeta, document.querySelector('[data-hero-meta]'));
  renderLinks(siteData.primaryLinks, document.querySelector('[data-links-grid]'));
  renderProjects(siteData.featuredProjects, document.querySelector('[data-projects-grid]'));
  renderMisc(siteData.miscItems, document.querySelector('[data-misc-grid]'));
  renderAbout(siteData.about, document.querySelector('[data-about-copy]'));
  renderFooter(siteData.footer, document.querySelector('[data-footer-meta]'), siteData.siteName);
}

mountSiteContent();
setupInteractions();
