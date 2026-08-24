// Interaction 1: Dark / Light Mode Toggle
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', targetTheme);
  themeBtn.textContent = targetTheme === 'dark' ? '☀️' : '🌙';
});

// Interaction 2: Project Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || filter === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 💀 Extra Challenge: Pure JS Custom Typing Animation
const words = ["Developer", "Problem Solver"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typingTarget = document.getElementById("typing-text");

function type() {
  const currentWord = words[wordIdx];
  
  if (isDeleting) {
    typingTarget.textContent = currentWord.substring(0, charIdx - 1);
    charIdx--;
  } else {
    typingTarget.textContent = currentWord.substring(0, charIdx + 1);
    charIdx++;
  }

  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && charIdx === currentWord.length) {
    speed = 1500; // Pause at full word
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    wordIdx = (wordIdx + 1) % words.length; // Move to next word
    speed = 500;
  }

  setTimeout(type, speed);
}

// Start animation after DOM load
document.addEventListener("DOMContentLoaded", () => {
  if (typingTarget) type();
});