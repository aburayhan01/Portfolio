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