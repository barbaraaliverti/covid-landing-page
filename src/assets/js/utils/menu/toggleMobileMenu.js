import $ from 'jquery';

const menuIcon = $('.menu__icon');
const mobileMenu = $('.menu');
const isMobile = $(window).width() <= 900;

const toggleMobileMenu = () => {
  if (isMobile) {
    menuIcon.on('click', () => {
      if (mobileMenu.hasClass('menu--open')) {
        mobileMenu.removeClass('menu--open');
        menuIcon.children().remove();
        menuIcon.append($('<i class="fa-solid fa-bars"></i>'));
      } else {
        mobileMenu.addClass('menu--open');
        menuIcon.children().remove();
        menuIcon.append($('<i class="fa-solid fa-xmark"></i>'));
        menuIcon.children().addClass('menu__icon--close');
      }
    });
  }
};

export default toggleMobileMenu;
