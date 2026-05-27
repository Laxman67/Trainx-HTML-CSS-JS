gsap.from('#page1 #box', { scale: 0, rotate: 360, duration: 1 });
gsap.from('#page2 #box', {
  scale: 0,
  rotate: 360,
  scrollTrigger: {
    trigger: '#page2 #box',
    scroller: 'body',
    markers: true,
    start: 'top 60%',
    end: 'top 30%',
    scrub: 3,
    pin: true,
  },
});
