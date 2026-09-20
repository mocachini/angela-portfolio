const menuBtn = document.querySelector('.menu-btn');

const nav = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

nav?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  })
);


// =========================
// PROJECT FILTER
// =========================

const filterButtons = document.querySelectorAll('.project-filter');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {

  button.addEventListener('click', () => {

    // Change active button
    filterButtons.forEach(btn =>
      btn.classList.remove('active')
    );

    button.classList.add('active');

    // Get selected category
    const category = button.dataset.filter;

    // Filter projects
    projectCards.forEach(card => {

      const categories = card.dataset.category
        .split(' ');

      if (
        category === 'all' ||
        categories.includes(category)
      ) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }

    });

  });

});


// =========================
// SCROLL REVEAL
// =========================

const observer = new IntersectionObserver(
  entries =>
    entries.forEach(entry => {
      if (entry.isIntersecting)
        entry.target.classList.add('visible');
    }),
  { threshold: .08 }
);

document.querySelectorAll('.reveal').forEach(el =>
  observer.observe(el)
);