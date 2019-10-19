function stickyscroll(){
  const controller = new ScrollMagic.Controller();
  
  new ScrollMagic.Scene({
    duration:'111%',
   triggerElement:'.aboutme',
    triggerHook:0
  })
  .setPin('.aboutme')
  .addTo(controller);
}
stickyscroll();