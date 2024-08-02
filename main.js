$(document).ready(function () {
  // Fade out and hide loading page
  setTimeout(function () {
    $(".loading-page").animate({ opacity: 0 }, 1500, function () {
      $(this).css("display", "none");
    });
  }, 2500);

  // Animate logo name
  setTimeout(function () {
    $(".logo-name")
      .css({ opacity: 0, position: "relative", top: "50px" })
      .animate({ opacity: 1, top: "0px" }, 2000);
  }, 500);
});
