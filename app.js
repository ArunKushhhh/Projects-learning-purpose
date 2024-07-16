const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const fixedImage = document.querySelector("#fixed-image");

const elemC = document.querySelector("#elem-container");
elemC.addEventListener("mouseenter", function () {
  fixedImage.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixedImage.style.display = "none";
});

const elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", () => {
    var imageSrc = e.getAttribute("data-image");
    fixedImage.style.backgroundImage = `url(${imageSrc})`;
  });
});
