if ($("#mobile-indicator").css("display") == "none") {

  var is_mobile = true;

} else {

  var is_mobile = true;

}


function animateAll() {

  if ($("#mobile-indicator").css("display") == "none" && !$("body").hasClass("animated")) {

    $("body").addClass("animated");

    var controller = new ScrollMagic.Controller();

    // Top ttl

    var topTtlTween = TweenMax.to($(".section-top-ttl"), 1.5, {
      opacity: 1,
      y: 0,
      ease: Power2.easeInOut,
      overwrite: "none",
      delay: 1
    });

    var topTtlScene = new ScrollMagic.Scene({
      triggerElement: "body",
      offset: 0
    })
      .setTween(topTtlTween)
      .addTo(controller);


    // Top ttl END

    // Top Button

    var topButtonTween = TweenMax.to($(".section-top-button"), 1.5, {
      opacity: 1,
      y: 0,
      ease: Power2.easeInOut,
      overwrite: "none",
      delay: 2
    });

    var topButtonScene = new ScrollMagic.Scene({
      triggerElement: "body",
      offset: 0
    })
      .setTween(topButtonTween)
      .addTo(controller);


    // Top Button END

    // Section info

    $(".section-info").each(function (index, element) {

      var infoHeader = $(this).find("h2"),
        infoP = $(this).find("p"),
        infoButton = $(this).find(".info-button");

      var infoHeaderTween = TweenMax.to(infoHeader, .7, {
        y: 0,
        opacity: 1,
        delay: 0
      });

      var infoHeaderScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: 100
      })
        .setTween(infoHeaderTween)
        .addTo(controller);

      var infoPTween = TweenMax.to(infoP, .7, {
        y: 0,
        opacity: 1,
        delay: infoP.prevAll().length * .25
      });

      var infoPScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: 100
      })
        .setTween(infoPTween)
        .addTo(controller);

      var infoButtonTween = TweenMax.to(infoButton, .7, {
        y: 0,
        opacity: 1,
        delay: infoButton.prevAll().length * .25
      });

      var infoButtonScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: 100
      })
        .setTween(infoButtonTween)
        .addTo(controller);


    });

    // Section info END

    $(".section-header").not(".section-order .section-header").each(function (index, element) {

      var sectionHeader = $(this);

      var sectionHeaderTween = TweenMax.to(sectionHeader, 1, {
        x: 0,
        opacity: 1
      });

      var sectionHeaderScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -300
      })
        .setTween(sectionHeaderTween)
        .addTo(controller);

    });

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
