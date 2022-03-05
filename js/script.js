// side-nav
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// animations

AOS.init({
    easing: 'ease-in-out',
    duration: 800,
    once: true,
});

//typed

$("#typed").typing({
    strings: ['Full Stack Web Developer'],
    eraseDelay: 10,
    typeDelay: 80,
    stringStartDelay: 1000,
    color: '#5a71ed',
    typingOpacity: '0.1',
    loopCount: 3,
    cursorBlink: false,
    fade: true,
    onTyping: function () {
        console.log('onTyping');
    },
    onFinishedTyping: function () {
        console.log('onFinishedTyping');
    },
    onErasing: function () {
        console.log('onErasing');
    },
    onFinishedErasing: function () {
        console.log('onFinishedErasing');
    },
    onAllTypingCompleted: function () {
        console.log('onAllTypingCompleted');
    },
    onFinishedFadeErasing: function () {
        console.log('onFinishedFadeErasing');
    }
});

//portfolio
filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("singleproject");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("sortbtns");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

