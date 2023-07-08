let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu");

//sideNav.style.right== "-250px";
menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "images/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "images/menu.png";
  }
};

function openImg(element) {
  window.open(element.src);
}

//let t= document.getElementById("text").innerHTML;
let i = 0;
let t = "Give yourself \n a new Style this year!";

function typing() {
  if (i < t.length) {
    document.getElementById("text").innerHTML += t.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();
