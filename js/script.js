// const menus = document.querySelector('nav ul');
// const header = document.querySelector('header');
// const menuBtn = document.querySelector('.menu-btn');
// const closeBtn = document.querySelector('.close-btn');

// closeBtn.addEventListener('click', function() {
//     menu.classList.remove('display');
// });

// menuBtn.addEventListener('click', function() {
//     menu.classList.add('display');
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const menuBtn = document.getElementById('menu-btn');
//     const closeBtn = document.getElementById('close-btn');
//     const menu = document.getElementById('menu');

//     menuBtn.addEventListener('click', function() {
//         menu.classList.add('display');
//     });

//     closeBtn.addEventListener('click', function() {
//         menu.classList.remove('display');
//     });
// });

let darkModeToggle = document
                        .getElementById('darkModeToggle');
let body = document.body;
darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
};

function disableDarkMode() {
    body.classList.remove('dark-mode');
};


function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}




