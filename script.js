// make menu burger button works
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

// typing effect
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

// open the img in a new window
function openImg(element) {
  window.open(element.src);
}

// for zoomin effect when click
function zoomIn(element) {
  element.classList.toggle("zoom-in");
}

// get current year
const currentYear = new Date().getFullYear();

// update the value to currentYear automatically
document.getElementById("currentYear").textContent = currentYear;

// contact form
(function () {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (!form) return;

  function showFeedback(msg, ok = true) {
    feedback.style.display = "block";
    feedback.textContent = msg;
    feedback.style.color = ok ? "#0a0" : "#a00";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showFeedback("Lengkapi semua kolom wajib.", false);
      return;
    }

    // Simulasi pengiriman — rekayasa saja
    showFeedback("Mengirim pesan...");
    setTimeout(() => {
      showFeedback("Pesan terkirim. Terima kasih, " + name + "!");
      form.reset();
      setTimeout(() => {
        feedback.style.display = "none";
      }, 5000);
    }, 900);
  });
})();
