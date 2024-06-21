const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");

sideNav.style.right = "-250px";

function toggleMenu() {
  if (sideNav.style.right === "-250px") {
    sideNav.style.right = "0";
    menu.src = "images/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "images/menu.png";
  }
}

menuBtn.addEventListener("click", toggleMenu);

function openImg(element) {
  window.open(element.src);
}

const text = document.getElementById("text");
let i = 0;
const t = "Give yourself a new style this year";

function typing() {
  if (i < t.length) {
    text.innerHTML += t.charAt(i);
    i++;
    setTimeout(typing, 150);
  } else {
    i = 0;
    text.innerHTML = " ";
    setTimeout(typing, 200);
  }
}

typing();

// for zoomin effect when click
function zoomIn(element) {
  element.classList.toggle("zoom-in");
}

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year to the span with id "currentYear"
document.getElementById("currentYear").textContent = currentYear;
