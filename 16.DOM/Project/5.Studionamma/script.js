let animatedBox = document.getElementById('animated-char-box');

let letters = animatedBox.querySelectorAll('p');

letters.forEach((letter) => {
  let x = (Math.random() - 0.5) * 300;
  let y = (Math.random() - 0.5) * 300;

  let rotate = (Math.random() - 0.5) * 60;

  let scale = Math.random() * 0.5 + 0.7;

  letter.style.setProperty('--x', `${x}px`);
  letter.style.setProperty('--y', `${y}px`);
  letter.style.setProperty('--rotate', `${rotate}deg`);
  letter.style.setProperty('--scale', scale);
});

setTimeout(() => {
  animatedBox.classList.add('animate');
}, 6500);

// Smooth trailing cursor box
let cursorBox = document.getElementById('animated-box-cursor-box');
let animatedCharBox = document.getElementById('animated-char-box');
let container = animatedCharBox.parentElement; // .top-section
let topSection = document.querySelector('.top-section');

// topSection.addEventListener('mouseover', (e) => {
//   const { offsetX, offsetY } = e;
//   cursorBox.style.cssText = `
//  display:block;
//  left:${e.clientX}px;
//  top:${offsetY}px;
//  transition:
//           left 0.3s ease-in-out,
//           top 0.3s ease-in-out;

//   `;
// });
