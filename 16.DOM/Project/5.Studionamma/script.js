let cursorBox = document.getElementById('animated-cursor-box');
let topSection = document.getElementById('top-section');
let cursorFollower = document.getElementById('follower');

let modeChangeText = document.getElementById('mode');
let menuText = document.getElementById('menu');
let overlayMenus = document.getElementById('overlay');
let overlayHeading = document.querySelectorAll('.overlay-item h3');
let isDarkMode = false;
let overlayIsOpen = false;
let contactText = document.getElementById('contact');
let contactFormOverlay = document.getElementById('contact-form-overlay');
let navbar = document.getElementById('nav-ribbon');

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

// Overlays Menu Text

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
    overlayMenus.style.top = '-0%';
    // Dark Mode
    document.getElementById('nav-ribbon').style.color = 'black';
    modeChangeText.style.visibility = 'hidden';
    // TODO: Add Translate Effect
    overlayHeading.forEach((heading) => {
      heading.style.translate = '0% 0%';
    });

    // overlayMenus.style.transform = 'translateY(0%)';
  } else {
    e.target.textContent = 'MENU';
    overlayMenus.style.opacity = 1;
    overlayMenus.style.top = '-110%';
    modeChangeText.style.visibility = 'visible';

    // TODO: Add Translate Effect
    overlayHeading.forEach((heading) => {
      heading.style.translateY = '-100% 100%';
    });
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

// Overlays Contact Text

contactText.addEventListener('mouseenter', (e) => {
  e.target.textContent = 'CONTACT US';
});
contactText.addEventListener('mouseleave', (e) => {
  e.target.textContent = "LET'S TALK";
});

let contactOverlayIsOpen = false;

contactText.addEventListener('click', (e) => {
  contactOverlayIsOpen = !contactOverlayIsOpen;
  if (contactOverlayIsOpen) {
    e.target.textContent = 'CONTACT US';
    contactFormOverlay.style.top = '0%';
    cursorBox.style.display = 'none';
    document.querySelector('#contact-form-image-container img').style.width =
      '250px';
  } else {
    e.target.textContent = "LET'S TALK";
    contactFormOverlay.style.top = '-100%';
    document.querySelector('#contact-form-image-container img').style.width =
      '0px';
    cursorBox.style.display = 'block';
  }
});

// PopUp Area
//TODO: Explanation PopOut Area

const ImageTriggersBox = document.querySelectorAll('.highlight');

ImageTriggersBox.forEach((element) => {
  let interval;
  let index = 0;
  //NOTE: When Mouseenter
  element.addEventListener('mouseenter', () => {
    const images = element.querySelectorAll('.image-highlight');

    // Start from the first image
    index = 0;

    images[index].style.opacity = '1';

    interval = setInterval(() => {
      // Hide current image
      images[index].style.opacity = '0';

      // TODO: Rotate

      // if (index % 2 == 0) {
      //   images[index].style.rotate = `${Math.random() * images.length}deg`;
      //   images[index].style.bottom = `20px`;
      // } else {
      //   images[index].style.rotate = `-${Math.random() * images.length}deg`;
      //   images[index].style.bottom = `20px`;
      // }

      // Move to next image
      index++;

      // Loop back to first image
      if (index >= images.length) {
        index = 0;
      }

      // Show next image
      images[index].style.opacity = '1';
    }, 300);
  });

  // NOTE: when mouseleave
  element.addEventListener('mouseleave', () => {
    // console.log(interval);

    // Stop the loop
    clearInterval(interval);

    const images = element.querySelectorAll('.image-highlight');

    // Hide all images
    images.forEach((image) => {
      image.style.opacity = '0';
    });

    index = 0;
  });
});

// Interest Btns/Options

let interestOptions = document.querySelectorAll('.interest-option-items');

interestOptions.forEach((options) => {
  options.addEventListener('click', (e) => {
    // Remove from the existing One
    interestOptions.forEach((option) => {
      option.classList.remove('active');
    });

    e.target.classList.add('active');
  });
});

// TODO: Playgroud

let playgroundHeading = document.getElementById('playground-heading');

// MouseMove to move item
playgroundHeading.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;

  // FIXME: Move Item
  document.getElementById('playground-item').style.top = `${offsetY + 10}px`;
  document.getElementById('playground-item').style.left = `${offsetX + 10}px`;
});

// Hide and Display Item

playgroundHeading.addEventListener('mouseleave', (e) => {
  document.getElementById('playground-item').style.display = 'none';
});

playgroundHeading.addEventListener('mouseenter', (e) => {
  document.getElementById('playground-item').style.display = 'block';
});

// TODO: Vedio Grid Items

let gridVedioItems = document.querySelectorAll('.grid-vedio-items');

gridVedioItems.forEach((item) => {
  const follower = item.querySelector('.vedio-item-follower');

  item.addEventListener('mouseenter', (e) => {
    e.target.style.transform = 'scale(.95)';
    e.target.firstElementChild.style.filter = 'blur(5px)';
    e.target.lastElementChild.style.display = 'block';
  });

  item.addEventListener('mouseleave', (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.firstElementChild.style.filter = 'blur(0px)';
    e.target.lastElementChild.style.display = 'none';
  });

  // Follower
  item.addEventListener('mousemove', (e) => {
    follower.style.display = 'block';
    follower.style.top = `${e.offsentX}px`;
    follower.style.left = `${e.offsetY}px`;
  });
});
