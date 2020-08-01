if ($("#mobile-indicator").css("display") == "none") {

  var is_mobile = true;

} else {

  var is_mobile = true;

}



function animateAll() {

  if ($("#mobile-indicator").css("display") == "none" && !$("body").hasClass("animated")) {

    $("body").addClass("animated");

    var controller = new ScrollMagic.Controller();

    // Circle shadow

    var circleShadowTween = TweenMax.to($(".sticky-circle-1-shadow"), 1, {
      opacity: 0,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var circleShadowScene = new ScrollMagic.Scene({
      triggerElement: ".section-value",
      offset: 0
    })
      .setTween(circleShadowTween)
      .addTo(controller);



    // Circle shadow END

    // Circle 1

    var circle1Tween = TweenMax.to($(".sticky-circle-1"), 1, {
      borderWidth: 30,
      x: 33,
      y: 186,
      width: 100,
      height: 100,
      opacity: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var circle1Scene = new ScrollMagic.Scene({
      triggerElement: ".section-value",
      offset: 0
    })
      .setTween(circle1Tween)
      .addTo(controller);

    var circle1Tween2 = TweenMax.to($(".sticky-circle-1"), 1, {
      opacity: 0,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var circle1Scene2 = new ScrollMagic.Scene({
      triggerElement: ".section-stages",
      offset: 0
    })
      .setTween(circle1Tween2)
      .addTo(controller);

    // Circle 1 END

    // Circle 2

    var circle2Tween = TweenMax.to($(".sticky-circle-2"), 1, {
      borderWidth: 15,
      x: 406,
      y: -33,
      width: 55,
      height: 55,
      opacity: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var circle2Scene = new ScrollMagic.Scene({
      triggerElement: ".section-value",
      offset: 0
    })
      .setTween(circle2Tween)
      .addTo(controller);

    var circle2Tween2 = TweenMax.to($(".sticky-circle-2"), 1, {
      borderWidth: 50,
      x: 223,
      y: -9,
      width: 261,
      height: 261,
      opacity: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var circle2Scene2 = new ScrollMagic.Scene({
      triggerElement: ".section-stages",
      offset: 0
    })
      .setTween(circle2Tween2)
      .addTo(controller);

    var circle2Tween3 = TweenMax.to($(".sticky-circle-2"), 1, {
      opacity: 0,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var circle2Scene3 = new ScrollMagic.Scene({
      triggerElement: ".section-who",
      offset: 0
    })
      .setTween(circle2Tween3)
      .addTo(controller);

    // Circle 2 END

    // Circle 3

    var circle3Tween = TweenMax.to($(".sticky-circle-3"), 1, {
      borderWidth: 40,
      x: 248,
      y: 344,
      width: 150,
      height: 150,
      opacity: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var circle3Scene = new ScrollMagic.Scene({
      triggerElement: ".section-value",
      offset: 0
    })
      .setTween(circle3Tween)
      .addTo(controller);

    var circle3Tween2 = TweenMax.to($(".sticky-circle-3"), 1, {
      opacity: 0,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var circle3Scene2 = new ScrollMagic.Scene({
      triggerElement: ".section-stages",
      offset: 0
    })
      .setTween(circle3Tween2)
      .addTo(controller);

    // Circle 3 END

    // Orbit 1

    var orbit1Tween = TweenMax.to($(".sticky-orbit-1"), 1, {
      opacity: 0,
      scale: 0,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var orbit1Scene = new ScrollMagic.Scene({
      triggerElement: ".section-value",
      offset: 0
    })
      .setTween(orbit1Tween)
      .addTo(controller);

    // Orbit 1 END

    // Orbit 2

    var orbit2Tween = TweenMax.to($(".sticky-orbit-2"), 1, {
      opacity: 0,
      scale: 0,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var orbit2Scene = new ScrollMagic.Scene({
      triggerElement: ".section-value",
      offset: 0
    })
      .setTween(orbit2Tween)
      .addTo(controller);

    // Orbit 2 END

    // Orbit 3

    var orbit3Tween = TweenMax.to($(".sticky-orbit-3"), 1, {
      opacity: 1,
      scale: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var orbit3Scene = new ScrollMagic.Scene({
      triggerElement: ".section-value",
      offset: 0
    })
      .setTween(orbit3Tween)
      .addTo(controller);

    var orbit3Tween2 = TweenMax.to($(".sticky-orbit-3"), 1, {
      opacity: 0,
      scale: 0,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var orbit3Scene2 = new ScrollMagic.Scene({
      triggerElement: ".section-stages",
      offset: 0
    })
      .setTween(orbit3Tween2)
      .addTo(controller);

    // Orbit 3 END

    // Orbit 4

    var orbit4Tween = TweenMax.to($(".sticky-orbit-4"), 1, {
      opacity: 1,
      scale: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var orbit4Scene = new ScrollMagic.Scene({
      triggerElement: ".section-value",
      offset: 0
    })
      .setTween(orbit4Tween)
      .addTo(controller);

    var orbit4Tween2 = TweenMax.to($(".sticky-orbit-4"), 1, {
      opacity: 0,
      scale: 0,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var orbit4Scene2 = new ScrollMagic.Scene({
      triggerElement: ".section-stages",
      offset: 0
    })
      .setTween(orbit4Tween2)
      .addTo(controller);

    // Orbit 4 END

    // Sputnik

    var sputnikTween = TweenMax.to($(".sticky-pic-sputnik"), 1, {
      opacity: .2,
      overwrite: "none"
    });

    var sputnikScene = new ScrollMagic.Scene({
      triggerElement: ".section-who",
      offset: 0
    })
      .setTween(sputnikTween)
      .addTo(controller);

    // Sputnik END

    // Sputnik 1

    var sputnik1Tween = TweenMax.to($(".sticky-pic-sputnik-1"), 1, {
      opacity: .2,
      x: -98,
      y: 91,
      scale: .57,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var sputnik1Scene = new ScrollMagic.Scene({
      triggerElement: ".section-stages",
      offset: 0
    })
      .setTween(sputnik1Tween)
      .addTo(controller);

    var sputnik1Tween2 = TweenMax.to($(".sticky-pic-sputnik-1"), 1, {
      opacity: 0,
      overwrite: "none"
    });

    var sputnik1Scene2 = new ScrollMagic.Scene({
      triggerElement: ".section-who",
      offset: 0
    })
      .setTween(sputnik1Tween2)
      .addTo(controller);

    // Sputnik 1 END

    // Sputnik 2

    var sputnik2Tween = TweenMax.to($(".sticky-pic-sputnik-2"), 1, {
      opacity: .4,
      x: -75,
      y: 68,
      scale: .73,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var sputnik2Scene = new ScrollMagic.Scene({
      triggerElement: ".section-stages",
      offset: 0
    })
      .setTween(sputnik2Tween)
      .addTo(controller);

    var sputnik2Tween2 = TweenMax.to($(".sticky-pic-sputnik-2"), 1, {
      opacity: 0,
      overwrite: "none"
    });

    var sputnik2Scene2 = new ScrollMagic.Scene({
      triggerElement: ".section-who",
      offset: 0
    })
      .setTween(sputnik2Tween2)
      .addTo(controller);

    // Sputnik 2 END

    // Sputnik 3

    var sputnik3Tween = TweenMax.to($(".sticky-pic-sputnik-3"), 1, {
      opacity: .6,
      x: -32,
      y: 31,
      scale: .81,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var sputnik3Scene = new ScrollMagic.Scene({
      triggerElement: ".section-stages",
      offset: 0
    })
      .setTween(sputnik3Tween)
      .addTo(controller);

    var sputnik3Tween2 = TweenMax.to($(".sticky-pic-sputnik-3"), 1, {
      opacity: 0,
      overwrite: "none"
    });

    var sputnik3Scene2 = new ScrollMagic.Scene({
      triggerElement: ".section-who",
      offset: 0
    })
      .setTween(sputnik3Tween2)
      .addTo(controller);

    // Sputnik 3 END
    
    // Quiz object 1

    var quiz1Tween = TweenMax.to($(".quiz-pic-obj-1"), 1, {
      borderWidth: 15,
      x: 343,
      y: -57,
      width: 55,
      height: 55,
      opacity: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var quiz1Scene = new ScrollMagic.Scene({
      triggerElement: ".section-quiz",
      offset: 0
    })
      .setTween(quiz1Tween)
      .addTo(controller);
    
    // Quiz object 1 END

    // Quiz object 2

    var quiz2Tween = TweenMax.to($(".quiz-pic-obj-2"), 1, {
      borderWidth: 30,
      x: -139,
      y: 204,
      width: 100,
      height: 100,
      opacity: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var quiz2Scene = new ScrollMagic.Scene({
      triggerElement: ".section-quiz",
      offset: 0
    })
      .setTween(quiz2Tween)
      .addTo(controller);

    // Quiz object 2 END

    // Quiz object 3

    var quiz3Tween = TweenMax.to($(".quiz-pic-obj-3"), 1, {
      borderWidth: 40,
      x: 92,
      y: 326,
      width: 150,
      height: 150,
      opacity: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var quiz3Scene = new ScrollMagic.Scene({
      triggerElement: ".section-quiz",
      offset: 0
    })
      .setTween(quiz3Tween)
      .addTo(controller);

    // Quiz object 3 END

    // Quiz object 4

    var quiz4Tween = TweenMax.to($(".quiz-pic-obj-4"), 1, {
      opacity: 1,
      scale: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var quiz4Scene = new ScrollMagic.Scene({
      triggerElement: ".section-quiz",
      offset: 0
    })
      .setTween(quiz4Tween)
      .addTo(controller);

    // Quiz object 4 END

    // Quiz object 5

    var quiz5Tween = TweenMax.to($(".quiz-pic-obj-5"), 1, {
      opacity: 1,
      scale: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var quiz5Scene = new ScrollMagic.Scene({
      triggerElement: ".section-quiz",
      offset: 0
    })
      .setTween(quiz5Tween)
      .addTo(controller);

    // Quiz object 5 END

    // Contacts



    var contactsTween = TweenMax.to($(".contacts-descr"), 1, {
      width: 388,
      height: 388,
      x: 0,
      y: 96,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var contactsScene = new ScrollMagic.Scene({
      triggerElement: ".section-contacts",
      offset: 0
    })
      .setTween(contactsTween)
      .addTo(controller);

    // Contacts END

    TweenMax.to($(".page-header-text"), 1, {
      y: 70,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var headerTextTween = TweenMax.to($(".page-header-text"), 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeInOut,
      delay: .7
    });

    var headerTextScene = new ScrollMagic.Scene({
      triggerElement: ".section-page-header",
      offset: 0
    })
      .setTween(headerTextTween)
      .addTo(controller);


    TweenMax.to($(".quote-text"), 1, {
      y: 70,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var quoteTextTween = TweenMax.to($(".quote-text"), 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeInOut
    });

    var quoteTextScene = new ScrollMagic.Scene({
      triggerElement: ".section-quote",
      offset: -150
    })
      .setTween(quoteTextTween)
      .addTo(controller);

    TweenMax.to($(".quote-author"), 1, {
      y: 70,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var quoteAuthorTween = TweenMax.to($(".quote-author"), 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeInOut,
      delay: .7
    });

    var quoteAuthorScene = new ScrollMagic.Scene({
      triggerElement: ".section-quote",
      offset: -150
    })
      .setTween(quoteAuthorTween)
      .addTo(controller);


    TweenMax.to($(".section-about .section-header"), 1, {
      x: -100,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var aboutHeaderTween = TweenMax.to($(".section-about .section-header"), 1, {
      x: 0,
      opacity: 1,
      ease: Power2.easeInOut
    });

    var aboutHeaderScene = new ScrollMagic.Scene({
      triggerElement: ".section-about",
      offset: -150
    })
      .setTween(aboutHeaderTween)
      .addTo(controller);

    TweenMax.to($(".about-descr"), 1, {
      x: -100,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var aboutDescrTween = TweenMax.to($(".about-descr"), 1, {
      x: 0,
      opacity: 1,
      ease: Power2.easeInOut
    });

    var aboutDescrScene = new ScrollMagic.Scene({
      triggerElement: ".section-about",
      offset: -150
    })
      .setTween(aboutDescrTween)
      .addTo(controller);

    TweenMax.to($(".about-video"), 1, {
      x: 100,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var aboutVideoTween = TweenMax.to($(".about-video"), 1, {
      x: 0,
      opacity: 1,
      ease: Power2.easeInOut,
      delay: .7
    });

    var aboutVideoScene = new ScrollMagic.Scene({
      triggerElement: ".section-about",
      offset: -150
    })
      .setTween(aboutVideoTween)
      .addTo(controller);


    $(".pros-tmb").each(function (index, element) {

      TweenMax.to($(element).find(".pros-tmb-pic"), 1, {
        x: -50,
        opacity: 0
      });

      var prosPicTween = TweenMax.to($(element).find(".pros-tmb-pic"), 1, {
        x: 0,
        opacity: 1,
        delay: index * .5
      });

      var prosPicScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".pros-list"),
        offset: -100
      })
        .setTween(prosPicTween)
        .addTo(controller);

      TweenMax.to($(element).find(".pros-tmb-obj"), 1, {
        x: 50,
        opacity: 0
      });

      var prosObjTween = TweenMax.to($(element).find(".pros-tmb-obj"), 1, {
        x: 0,
        opacity: 1,
        delay: index * .5 + .15
      });

      var prosObjScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".pros-list"),
        offset: -250
      })
        .setTween(prosObjTween)
        .addTo(controller);


      TweenMax.to($(element).find(".pros-tmb-descr"), 1, {
        y: 50,
        opacity: 0
      });

      var prosDescrTween = TweenMax.to($(element).find(".pros-tmb-descr"), 1, {
        y: 0,
        opacity: 1,
        delay: index * .5 + .5
      });

      var prosDescrScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".pros-list"),
        offset: -100
      })
        .setTween(prosDescrTween)
        .addTo(controller);


    });

    $(".col-12:nth-child(2n-1) > .service-tmb").each(function (index, element) {

      TweenMax.to($(element), 1, {
        y: 50,
        opacity: 0
      });

      var serviceTween = TweenMax.to($(element), .7, {
        y: 0,
        opacity: 1
      });

      var serviceScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -250
      })
        .setTween(serviceTween)
        .addTo(controller);


    });

    $(".col-12:nth-child(2n) > .service-tmb").each(function (index, element) {

      TweenMax.to($(element), 1, {
        y: 50,
        opacity: 0
      });

      var serviceTween = TweenMax.to($(element), .7, {
        y: 0,
        opacity: 1,
        delay: .5
      });

      var serviceScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -250
      })
        .setTween(serviceTween)
        .addTo(controller);


    });

    $(".col-12:nth-child(2n-1) > .project-tmb").each(function (index, element) {

      TweenMax.to($(element), 1, {
        y: 50,
        opacity: 0
      });

      var projectTween = TweenMax.to($(element), .7, {
        y: 0,
        opacity: 1
      });

      var projectScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -250
      })
        .setTween(projectTween)
        .addTo(controller);


    });

    $(".col-12:nth-child(2n) > .project-tmb").each(function (index, element) {

      TweenMax.to($(element), 1, {
        y: 50,
        opacity: 0
      });

      var projectTween = TweenMax.to($(element), .7, {
        y: 0,
        opacity: 1,
        delay: .5
      });

      var projectScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -250
      })
        .setTween(projectTween)
        .addTo(controller);


    });

    TweenMax.to($(".section-clients .section-header"), 1, {
      y: 70,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var clientsHeaderTween = TweenMax.to($(".section-clients .section-header"), 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeInOut
    });

    var clientsHeaderScene = new ScrollMagic.Scene({
      triggerElement: ".section-clients",
      offset: -150
    })
      .setTween(clientsHeaderTween)
      .addTo(controller);

    TweenMax.to($(".section-clients-descr"), 1, {
      y: 70,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var clientsDescrTween = TweenMax.to($(".section-clients-descr"), 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeInOut,
      delay: .7
    });

    var clientsDescrScene = new ScrollMagic.Scene({
      triggerElement: ".section-clients",
      offset: -150
    })
      .setTween(clientsDescrTween)
      .addTo(controller);

  } else if ($("#mobile-indicator").css("display") == "block") {

    $("body").removeClass("animated");

    //controller = controller.enabled(false);
    //controller = controller.destroy(true);

  }

}

$(window).on("resize", function () {

  animateAll();

});

$(document).ready(function () {

  animateAll();

});


$(window).on("resize scroll load", function () {







});

(function( $ ) {
  $.fn.prlx = function(pTrigger, yStart, yFinish, fromTop) {

    if (!is_mobile && $(this).length) {

      var obj = $(this);

      var yPos;

      if (fromTop == false && $(window).scrollTop() < pTrigger.offset().top - $(window).height()) {

        yPos = yStart;

      } else if (fromTop == false && $(window).scrollTop() > pTrigger.offset().top + $(window).height()) {

        yPos = yFinish;


      } else {

        if (fromTop) {

          if (pTrigger.offset().top <= $(window).scrollTop()) {

            var percentOffset = (pTrigger.offset().top - $(window).scrollTop()) / ($(window).height() * 2);

          } else {

            percentOffset = 0;

          }

        } else {

          var percentOffset = (pTrigger.offset().top + $(window).height() - $(window).scrollTop()) / ($(window).height() * 2);

        }

        var yRange = yStart - yFinish,
          posInRange = yRange * percentOffset,
          yPos = posInRange + yFinish;

        obj.attr("percentOffset", percentOffset);

      }

      TweenMax.to(obj, .5, {y: yPos, ease:Linear.ease});

    }

  };
})( jQuery );
