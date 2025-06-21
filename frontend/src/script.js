// Smooth scroll for navigation links
document.querySelectorAll('nav a, .cta-button').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Highlight active section in nav
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#1E3A8A'; // Navy Blue
    }
  });
});

// Section animations on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      entry.target.querySelectorAll('li').forEach((li, index) => {
        li.style.opacity = '0';
        li.style.animation = `fadeInUp 0.5s ease-in-out ${index * 0.1}s forwards`;
      });
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Visitor counter simulation (using localStorage)
function updateVisitorCounter() {
  let visits = localStorage.getItem('portfolioVisits');
  if (!visits) {
    visits = 0;
  }
  visits = parseInt(visits) + 1;
  localStorage.setItem('portfolioVisits', visits);
  document.getElementById('counter-value').textContent = visits;
}

window.addEventListener('load', () => {
  updateVisitorCounter();
}); 