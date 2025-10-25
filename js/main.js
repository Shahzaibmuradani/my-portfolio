// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial State of the Menu
let showMenu = false;

menuBtn.addEventListener('click', toogleMenu);

function toogleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// Variable to store the last scroll position
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  // Get current scroll position
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scrolling down - hide menu button
    menuBtn.style.display = 'none';
  }
  
  // Always show when at top of page
  if (scrollTop === 0) {
    menuBtn.style.display = 'block';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);