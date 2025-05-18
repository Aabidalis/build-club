// Animate cards on scroll using Intersection Observer
const cards = document.querySelectorAll('.robotics-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  observer.observe(card);
});

// Add animation class from CSS
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .robotics-card.animate {
      animation: fadeInUp 0.8s ease forwards;
    }
  `;
  document.head.appendChild(style);
});

// Highlight current navigation link
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    if (link.href.includes('robotics.html')) {
      link.classList.add('active');
    }
  });
});

// Optional: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});




const cursos = document.querySelector(".custom-cursor");

let hideTimeout;

document.addEventListener("mousemove", (e) => {
  cursos.style.left = `${e.clientX}px`;
  cursos.style.top = `${e.clientY}px`;
  cursos.style.opacity = "1";

  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    cursos.style.opacity = "0";
  }, 1000); // Hide after 1 second
});

document.addEventListener("mouseleave", () => {
  cursos.style.opacity = "0";
});
