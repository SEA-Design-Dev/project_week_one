$(document).ready(function () {

  $(".c1-right").on("click", function(e) {
    var activeImage = $(".c1-image-shown");
    var nextImage = activeImage.next();

      if(nextImage.length == 0) {
        nextImage = $(".slider-inner img").first();
      };

    activeImage.removeClass("c1-image-shown").addClass("c1-image-hidden").css("z-index",-10);;
    nextImage.addClass("c1-image-shown").removeClass("c1-image-hidden").css("z-index",20);
    $(".carousel-2-inner img").not([activeImage, nextImage]).css("z-index",1);
    e.preventDefault();
    console.log("poop")
  });

  $(".c1-left").on("click", function(e){
    var activeImage = $(".c1-image-shown");
    var nextImage = activeImage.prev();

    if(nextImage.length == 0) {
      nextImage = $('.slider-inner img').last();
    }
    activeImage.removeClass("c1-image-shown").addClass("c1-image-hidden").css("z-index", -10);
    nextImage.addClass("c1-image-shown").removeClass("c1-image-hidden").css("z-index", 20);
    $('.carousel-2-inner img').not([activeImage, nextImage]).css("z-index", 1);
    e.preventDefault();
    console.log("yay")
  })

});
