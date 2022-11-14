import $ from 'jquery';

const menuLink = $('.menu__link');
const menuContactButton = $('.menu__element__button');
// mobile
const isMobile = $(window).width() <= 900;
const menuIcon = $('.menu__icon');
const mobileMenu = $('.menu');

const selectMenuElements = () => {
  // const scrollToSection = id => {
  //   $(id)[0].scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'end',
  //   });
  // };

  menuLink.on('click', () => {
    if (isMobile) {
      mobileMenu.removeClass('menu--open');
      menuIcon.children().remove();
      menuIcon.append($('<i class="fa-solid fa-bars"></i>'));
    }
  });

  menuContactButton.on('click', () => {
    if (isMobile) {
      mobileMenu.removeClass('menu--open');
      menuIcon.children().remove();
      menuIcon.append($('<i class="fa-solid fa-bars"></i>'));
    }
  });
};

export default selectMenuElements;
