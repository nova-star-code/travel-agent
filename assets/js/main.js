/*=============== SHOW MENU ===============*/
/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
$(".nav__link").click(function(){
    $(".nav__menu").removeClass("show-menu");
})





/*=============== SWIPER HOME ===============*/
const swiperHome = new Swiper('.home__swiper', {
  loop: true,
  slidesPerView:"auto",
  grabCursor:true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay:{
    delay:3000,
    disableOnTnteraction:false,
  }
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = $("header");
  window.scrollY >= 50 
    ? header.addClass("bg-header") 
    : header.removeClass("bg-header");
};

// Run when the page scrolls
$(window).on("scroll", bgHeader);


/*=============== SWIPER TESTIMONIAL ===============*/
const testimonial__swiper = new Swiper('.testimonial__swiper', {
  loop: true,
  slidesPerView:"auto",
  grabCursor:true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

   autoplay:{
    delay:3000,
    disableOnTnteraction:false,
  }
});

/*=============== SHOW SCROLL UP ===============*/ 
function bgArrow (){
  const arrow = $(".scrollup");
  window.scrollY >= 50 
    ? arrow.addClass("showScroll") 
    : arrow.removeClass("showScroll");
};

// Run when the page scrolls
$(window).on("scroll", bgArrow);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
