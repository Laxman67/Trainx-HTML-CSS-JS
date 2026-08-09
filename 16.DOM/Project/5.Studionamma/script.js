let cursorBox = document.getElementById('animated-cursor-box');
let topSection = document.getElementById('top-section');

topSection.addEventListener('mousemove', (e) => {
  cursorBox.style.opacity = 1;
  cursorBox.style.left = `${e.clientX}px`;
  cursorBox.style.top = `${e.clientY}px`;
});

topSection.addEventListener('mouseleave', (e) => {
  cursorBox.style.opacity = 0;
});
