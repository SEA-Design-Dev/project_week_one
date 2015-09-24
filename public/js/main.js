$(document).ready(function () {
  var slides = ["carousel-inner-download", "carousel-inner-download-2", "carousel-inner-download-3", "carousel-inner-download-4", "carousel-inner-reviews"];

  var clickableImage = [
    ['c1-right', 'slider-inner img'],
    ['c1-left', 'slider-inner img'],
    ['c1-right-2', 'slider-inner-2 img'],
    ['c1-left-2', 'slider-inner-2 img'],
    ['c1-right-3', 'slider-inner-3 img'],
    ['c1-left-3', 'slider-inner-3 img'],
  ];

  $.each(slides, function(index,value) {
      $("." + value).cycle({
      fx:'scrollDown',
      timeout: 4000,
      speed: 1000,
    });
  });

  $.each(clickableImage, function(index, value) {
    $("." + value[0]).on("click", function(e) {
      var activeImage = $(".c1-image-shown");
      var nextImage = activeImage.next();

        if(nextImage.length == 0) {
          nextImage = $("." + value[1]).first();
        };

      activeImage.removeClass("c1-image-shown").addClass("c1-image-hidden").css("z-index",-10);;
      nextImage.addClass("c1-image-shown").removeClass("c1-image-hidden").css("z-index",20);
      $(".slider-inner img").not([activeImage, nextImage]).css("z-index",1);
    });
  });
});
