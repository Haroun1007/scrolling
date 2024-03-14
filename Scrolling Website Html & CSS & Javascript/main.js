let moon = document.getElementById("moon");
let mountainsOne = document.getElementById("mountainsone");
let mountainsTwo = document.getElementById("mountainstwo");
let mountainsThree = document.getElementById("mountainsthree");
let boat = document.getElementById("boat");
let aleph = document.querySelector(".aleph");
let stars = document.getElementById("stars");
let river = document.getElementById("river");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountainsOne.style.top = value * 2 + "px";
  mountainsTwo.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value + "px";
  aleph.style.fontSize = value + "px";
  if (scrollY >= 67) {
    aleph.style.fontSize = 67 + "px";
    aleph.style.position = "fixed";
    if (scrollY >= 406) {
      aleph.style.display = "none";
    } else {
      aleph.style.display = "block";
    }
    if (scrollY >= 100) {
      document.querySelector(".main").style.background =
        " linear-gradient(#376281, #10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016, #10001f)";
    }
  }
};
