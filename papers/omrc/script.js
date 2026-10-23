// Keep all results readable if JavaScript is disabled.
const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('.result-panel')];
function selectTab(tab) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    item.classList.toggle('active', selected);
  });
  panels.forEach(panel => { panel.hidden = panel.id !== tab.getAttribute('aria-controls'); });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectTab(tabs[next]);
    tabs[next].focus();
  });
});
selectTab(tabs[0]);
document.querySelector('[role="tablist"]').hidden = false;

const sectionLinks = [...document.querySelectorAll('.sticky-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
let scrollPending = false;
function updateNavigation() {
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 140) current = section;
  }
  sectionLinks.forEach(link => {
    const active = link.hash === `#${current.id}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollPending = false;
}
window.addEventListener('scroll', () => {
  if (!scrollPending) {
    scrollPending = true;
    requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
updateNavigation();

const dialog = document.getElementById('figureDialog');
let figureTrigger;
document.querySelectorAll('.figure-trigger').forEach(button => {
  button.addEventListener('click', () => {
    figureTrigger = button;
    const image = button.querySelector('img');
    const enlarged = document.getElementById('enlargedFigure');
    enlarged.src = image.src;
    enlarged.alt = image.alt;
    document.getElementById('figureTitle').textContent = button.getAttribute('aria-label').replace(/^Enlarge /, '');
    document.getElementById('figureCaption').textContent = button.closest('figure').querySelector('figcaption').textContent;
    dialog.showModal();
  });
});
document.getElementById('closeFigure').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => figureTrigger?.focus());

document.getElementById('copyBtn').addEventListener('click', async () => {
  const block = document.getElementById('bibtexBlock');
  const status = document.getElementById('copyStatus');
  try {
    await navigator.clipboard.writeText(block.textContent);
    status.textContent = 'Citation copied to clipboard.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(block);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
  }
});
