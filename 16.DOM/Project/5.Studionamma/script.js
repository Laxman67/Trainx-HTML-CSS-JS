let cursorBox = document.getElementById('animated-cursor-box');
let topSection = document.getElementById('top-section');
let cursorFollower = document.getElementById('follower');

let modeChangeText = document.getElementById('mode');
let menuText = document.getElementById('menu');
let overlayMenus = document.getElementById('overlay');
let overlayHeading = document.querySelectorAll('.overlay-item h3');
let isDarkMode = false;
let overlayIsOpen = false;

document.addEventListener('mousemove', (e) => {
  // console.log(e.clientX);
  cursorFollower.style.left = `${e.clientX}px `;
  cursorFollower.style.top = `${e.clientY}px`;
  cursorFollower.style.transform = 'translate(-30px,-30px)';
});

// Navbar
modeChangeText.addEventListener('click', (e) => {
  isDarkMode = !isDarkMode;
  e.target.textContent == 'DARK MODE'
    ? (e.target.textContent = 'LIGHT MODE')
    : (e.target.textContent = 'DARK MODE');
  // To change the BG of html page
  this.document.body.classList.toggle('dark');
  // console.log(ove);

  overlayHeading.forEach((menu) => {
    if (isDarkMode) {
      menu.style.color = 'black';
      document.getElementById('nav-ribbon').style.color = 'white';
      ('');
      topSection.style.backgroundColor = 'black';
    } else {
      document.getElementById('nav-ribbon').style.color = 'black';
      topSection.style.backgroundColor = '#e4e4e4';
    }
  });
});
// Top Section
topSection.addEventListener('mousemove', (e) => {
  cursorBox.style.opacity = 1;
  cursorBox.style.left = `${e.clientX}px`;
  cursorBox.style.top = `${e.clientY}px`;
  cursorBox.style.transition = `all linear .5s`;
});

topSection.addEventListener('mouseleave', (e) => {
  cursorBox.style.opacity = 0;
});

// Overlays Menus

menuText.addEventListener('mouseenter', (e) => {
  e.target.textContent = 'CLOSE';
});
menuText.addEventListener('mouseleave', (e) => {
  e.target.textContent = 'MENU';
});

/*FIXME:  OVERLAY: STEP 1*/
menuText.addEventListener('click', (e) => {
  overlayIsOpen = !overlayIsOpen;
  if (isDarkMode && overlayIsOpen) {
    document.getElementById('nav-ribbon').style.color = 'black';
  }

  if (overlayIsOpen) {
    e.target.textContent = 'CLOSE';
    overlayMenus.style.opacity = 1;
    overlayMenus.style.top = '-10%';
    // Dark Mode
    document.getElementById('nav-ribbon').style.color = 'black';
    modeChangeText.style.visibility = 'hidden';

    // overlayMenus.style.transform = 'translateY(0%)';
  } else {
    e.target.textContent = 'MENU';
    overlayMenus.style.opacity = 1;
    overlayMenus.style.top = '-110%';
    modeChangeText.style.visibility = 'visible';

    // document.getElementById('nav-ribbon').style.color = 'black';

    // overlayMenus.style.transform = 'translateY(-100%)';
  }
  if (isDarkMode) {
    document.getElementById('nav-ribbon').style.color = 'white';
  }
});

// Move Left all the Heading of Overlays
// FIXME: Overlay Items
let overlayItems = document
  .querySelectorAll('.overlay-item')
  .forEach((item) => {
    console.log(item);
    item.addEventListener('mouseenter', (e) => {
      // FIXME:  FOr images

      item.firstElementChild.style.width = '200px';

      // FIXME: For Heading
    });

    item.addEventListener('mouseleave', (e) => {
      item.firstElementChild.style.width = '0px';
      //  item.firstElementChild.style.left = '0%';
      item.lastElementChild.style.transform = 'translateX(0px)';
    });
  });

// Also handle cursor-box on overlay

overlayMenus.addEventListener('mouseenter', (e) => {
  cursorBox.style.display = 'none';
});

overlayMenus.addEventListener('mouseleave', (e) => {
  cursorBox.style.display = 'block';
});

// PopOut Area

let highlights = document.querySelectorAll('.highlight');
// debugger;
highlights.forEach((highlight) => {
  let images = highlight.querySelectorAll('img');
  if (!images.length) return;

  let idx = 0;
  let zIndex = images.length;
  let interval = null;

  highlight.addEventListener('mouseenter', () => {
    if (interval) return;
    interval = setInterval(() => {
      const current = images[idx % images.length];

      if (idx < images.length) {
        current.classList.add('show');
        current.style.zIndex = ++zIndex;
      } else {
        current.classList.remove('show');
        requestAnimationFrame(() => {
          current.style.zIndex = ++zIndex;
          requestAnimationFrame(() => {
            current.classList.add('show');
          });
        });
      }
      idx++;
    }, 300);
  });

  highlight.addEventListener('mouseleave', () => {
    clearInterval(interval);
    interval = null;
    images.forEach((img) => {
      img.classList.remove('show');
      img.style.zIndex = '';
    });
    idx = 0;
    zIndex = images.length;
  });
});
