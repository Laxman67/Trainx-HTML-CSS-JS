const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// c.fillRect(10, 20, 50, 50);

//fillRect width same width and height of canvas

/**
 * The requestAnimationFrame method is a powerful tool in JavaScript for creating smooth animations. It tells the browser that you wish to perform an animation and requests that the browser call a specified function to update the animation before the next repaint.

How It Works

When you call requestAnimationFrame, you pass a callback function that the browser will execute before the next repaint. This callback function receives a single argument, a DOMHighResTimeStamp, which indicates the current time when requestAnimationFrame starts to fire callbacks.

Here's a basic example to illustrate its usage:
 */

/**We're creating this class bcos we need to create multiple player */

const GRAVITY = 0.5;

class Sprite {
  constructor({ position, imageSrc }) {
    this.position = position;
    // new ImageSrc(); this image Object comes with javascript API by default for creating image

    this.image = new Image();
    // We'll wait until the image is loaded
    this.image.src = imageSrc;
  }

  draw() {
    // We'll wait until the image is loaded
    if (!this.image) return;
    // Draw image in Canvas
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
  }
}
class Player {
  constructor(position) {
    // this.position = { x: x, y: y };
    this.position = position;
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.height = 100;
    this.width = 100;
  }
  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.height, this.width);
  }
  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    // Add Height properties in each players
    if (this.position.y + this.height + this.velocity.y < canvas.height) {
      this.position.y += this.velocity.y;
      this.velocity.y += GRAVITY;
    } else this.velocity.y = 0;
  }
}

const KEYS = {
  ArrowUp: {
    pressed: false,
  },
  ArrowDown: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};

const data = fetch();
const player = new Player({ x: 0, y: 0 });
const player2 = new Player({ x: 300, y: 100 });
const player3 = new Player({ x: 500, y: 100 });

// This is our class we've created
const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: './assets/background.png',
});

function animate() {
  window.requestAnimationFrame(animate);
  // This is infinite till animate is running
  //  Create Canvas and fill and then player
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  // player.draw(); //This can be eliminated by calling this method inside update
  background.update();
  player.update();
  player2.update();

  player.velocity.x = 0;
  if (KEYS.ArrowRight.pressed) player.velocity.x = 5;
  else if (KEYS.ArrowLeft.pressed) player.velocity.x = -5;
}
animate();

window.addEventListener('keydown', (event) => {
  console.log(event.key);

  switch (event.key) {
    case 'ArrowLeft':
      KEYS.ArrowLeft.pressed = true;
      break;
    case 'ArrowRight':
      KEYS.ArrowRight.pressed = true;
      break;
    case 'ArrowUp':
      KEYS.ArrowUp.pressed = true;
      player.velocity.y = -10;
      break;
    case 'ArrowDown':
      KEYS.ArrowDown.pressed = true;
      break;
  }
});
window.addEventListener('keyup', (event) => {
  console.log(event.key);

  switch (event.key) {
    case 'ArrowLeft':
      KEYS.ArrowLeft.pressed = false;
      break;
    case 'ArrowRight':
      KEYS.ArrowRight.pressed = false;
      break;
    case 'ArrowUp':
      KEYS.ArrowUp.pressed = false;
      break;
    case 'ArrowDown':
      KEYS.ArrowDown.pressed = false;
      break;
  }
});
