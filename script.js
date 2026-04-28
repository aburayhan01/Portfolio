// Navbar Transparency Effect


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

//home

const roles = [
    "Software QA Engineer",
    "API Tester",
    "Automation Testing Learner"
];

let roleIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function typeEffect() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeEffect, 80);

    }
    else {

        setTimeout(eraseEffect, 2000);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;

        setTimeout(eraseEffect, 50);

    }
    else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeEffect, 500);

    }

}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});









// Smooth Scrolling for Section Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});







// Simple Console Greeting
console.log("Welcome to Abu Rayhan's Professional Portfolio.");

function openTab(evt, tabName) {
    var i, tabContent, tabLinks;

    // সব কন্টেন্ট হাইড করা
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.add("hidden");
        tabContent[i].classList.remove("block");
    }

    // সব বাটনের একটিভ ক্লাস রিমুভ করা
    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-tab");
    }

    // নির্দিষ্ট ট্যাব দেখানো এবং বাটনে একটিভ ক্লাস দেওয়া
    document.getElementById(tabName).classList.remove("hidden");
    document.getElementById(tabName).classList.add("block");
    evt.currentTarget.classList.add("active-tab");
}


const cards = document.querySelectorAll(".experience-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => {
    observer.observe(card);
});

// ===== CERTIFICATE SLIDER =====
(function () {
  const track = document.getElementById('certTrack');
  const dotsContainer = document.getElementById('certDots');
  if (!track) return;
 
  const cards = track.querySelectorAll('.cert-card');
  const totalCards = cards.length;
  let current = 0;
 
  // Calculate visible cards based on screen width
  function getVisible() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }
 
  // Calculate max index
  function getMax() {
    return Math.max(0, totalCards - getVisible());
  }
 
  // Build dots
  function buildDots() {
    dotsContainer.innerHTML = '';
    const max = getMax();
    for (let i = 0; i <= max; i++) {
      const dot = document.createElement('div');
      dot.classList.add('cert-dot');
      if (i === current) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }
 
  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.cert-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }
 
  function getCardWidth() {
    const card = cards[0];
    const gap = 24;
    return card.offsetWidth + gap;
  }
 
  function goTo(index) {
    const max = getMax();
    current = Math.max(0, Math.min(index, max));
    track.style.transform = `translateX(-${current * getCardWidth()}px)`;
    updateDots();
  }
 
  // Exposed globally for onclick buttons
  window.slideCert = function (dir) {
    goTo(current + dir);
  };
 
  // Auto slide every 3.5s
  let autoTimer = setInterval(() => {
    const max = getMax();
    goTo(current >= max ? 0 : current + 1);
  }, 2500);
 
  // Pause auto on hover
  track.closest('.cert-slider-wrapper').addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.closest('.cert-slider-wrapper').addEventListener('mouseleave', () => {
    autoTimer = setInterval(() => {
      const max = getMax();
      goTo(current >= max ? 0 : current + 1);
    }, 2500);
  });
 
  // Touch/swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) slideCert(diff > 0 ? 1 : -1);
  });
 
  // Init
  buildDots();
  window.addEventListener('resize', () => { buildDots(); goTo(0); });
})();
 