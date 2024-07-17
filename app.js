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

const design = document.querySelector("#heading h1:first-child")
const project = document.querySelector("#heading h1:nth-child(2)")
const execution = document.querySelector("#heading h1:nth-child(3)")
const designContent = document.querySelector(".design-content")
const projectContent = document.querySelector(".project-content")
const executionContent = document.querySelector(".execution-content")
const bar = document.querySelector("#orange-head-bar")
const windowImage = document.querySelector("#window-image img")
let src = windowImage.getAttribute("src")

design.addEventListener("click", () => {
  design.style.color = "white"
  project.style.color = "rgba(255, 255, 255, 0.3)"
  execution.style.color = "rgba(255, 255, 255, 0.3)"
  windowImage.setAttribute("src", "assets/images/design.png")
  bar.style.top = "0"
  designContent.style.display = "block"
  projectContent.style.display = "none"
  executionContent.style.display = "none"
})
project.addEventListener("click", () => {
  project.style.color = "white"
  design.style.color = "rgba(255, 255, 255, 0.3)"
  execution.style.color = "rgba(255, 255, 255, 0.3)"
  windowImage.setAttribute("src", "assets/images/projects.webp")
  bar.style.top = "5vw"
  projectContent.style.display = "block"
  designContent.style.display = "none"
  executionContent.style.display = "none"
})
execution.addEventListener("click", () => {
  execution.style.color = "white"
  design.style.color = "rgba(255, 255, 255, 0.3)"
  project.style.color = "rgba(255, 255, 255, 0.3)"
  windowImage.setAttribute("src", "assets/images/execution.webp")
  bar.style.top = "10vw"
  executionContent.style.display = "block"
  designContent.style.display = "none"
  projectContent.style.display = "none"
})
