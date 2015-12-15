console.log('\'Allo \'Allo!');

/** ********************************************
 +
 +  LET'S GET THIS FUCKING SCROLL ON, BITCHES!
 +
** *********************************************/

function kickoff_zoom() {
/**
 |
 |  BIG ASS CIRCLE ZOOM AND SPIN
**/
  var scrollMagicController = new ScrollMagic.Controller();
  tween = new TimelineMax();

  object1 = '#animation';
    tween.set(object1, {autoAlpha: 0})
    .to(object1, 1, {rotation: "360", scale: 5, autoAlpha: 1})
    .to(object1, 2, {rotation: "720", scale: 3, autoAlpha: 0})
    .set(object1, {autoAlpha: 0})

  // Create the Scene and trigger when visible
  scene = new ScrollMagic.Scene({
      offset: $('#scene').offset().top +320,
      duration: 900
    })
    .setPin('#scene')
    .setTween(tween)
    .addTo(scrollMagicController);

  // Add debug indicators fixed on right side
  scene.addIndicators();
}




function kickoff_tilt() {
/**
 |
 |  CARD STACK EXPANDING
**/
  var controllerTwo = new ScrollMagic.Controller();

  //tilt
  scene  = new ScrollMagic.Scene({
      offset: $('#tilt').offset().top - 320,
      duration: 320
    })
    .setPin('#tilt')
    .addTo(controllerTwo);

  //1
  blockTween = new TweenMax.to('#tilt1', 1.5, {
    css: {
      transform: 'rotateY(45deg) translateZ(-100px) perspective(600px)',
      boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
    }
  });

  scene = new ScrollMagic.Scene({
      offset: $('#tilt').offset().top - 320,
      duration: 320
    })
    .setTween(blockTween)
    .addTo(controllerTwo);

  //2
  blockTween = new TweenMax.to('#tilt2', 1.5, {
    css: {
      transform: 'rotateY(45deg) perspective(600px)',
      boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
    }
  });

  scene = new ScrollMagic.Scene({
      offset: $('#tilt').offset().top - 320,
      duration: 320
    })
    .setTween(blockTween)
    .addTo(controllerTwo);

  //3
  blockTween = new TweenMax.to('#tilt3', 1.5, {
    css: {
      transform: 'rotateY(45deg) translateZ(100px) perspective(600px)',
      boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
    }
  });

  scene = new ScrollMagic.Scene({
      offset: $('#tilt').offset().top - 320,
      duration: 320
    })
    .setTween(blockTween)
    .addTo(controllerTwo);
}

if ($('#scene').length > 0) {
  kickoff_zoom();
}

if ($('#tilt').length > 0) {
  kickoff_tilt();
}
