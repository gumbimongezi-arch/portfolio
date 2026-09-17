const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.textContent = open ? 'Close' : 'Menu';
});

document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menu';
}));

document.getElementById('year').textContent = new Date().getFullYear();

const viewer = document.querySelector('.viewer');
const viewerTitle = document.querySelector('#viewer-title');
const viewerContent = document.querySelector('.viewer-content');
const closeViewer = () => { viewer.close(); viewerContent.innerHTML = ''; };

document.querySelectorAll('[data-image], [data-pdf], [data-document]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    viewerTitle.textContent = trigger.dataset.title;
    if (trigger.dataset.image) {
      viewerContent.innerHTML = `<img src="${trigger.dataset.image}" alt="${trigger.dataset.title}">`;
    } else if (trigger.dataset.pdf) {
      viewerContent.innerHTML = `<iframe title="${trigger.dataset.title}" src="${trigger.dataset.pdf}#toolbar=0&navpanes=0"></iframe>`;
    } else {
      viewerContent.innerHTML = `<article class="manual-view"><p class="eyebrow">Project documentation</p><h2>Student Learning Portal</h2><p>This project supports learning workflows for both students and teachers.</p><div class="manual-flow"><div><span>01</span><strong>Student access</strong><p>Students log in to their portal, begin tutorial sessions using chat, ask questions, and attempt tasks with hints.</p></div><div><span>02</span><strong>Assessment journey</strong><p>Students complete tests and quizzes, then receive a clear completion summary for their session.</p></div><div><span>03</span><strong>Teacher tools</strong><p>Teachers log in to review reports, inspect specific results, create tests, and manage available assessments.</p></div></div></article>`;
    }
    viewer.showModal();
  });
});

document.querySelector('.viewer-close').addEventListener('click', closeViewer);
viewer.addEventListener('click', (event) => { if (event.target === viewer) closeViewer(); });
