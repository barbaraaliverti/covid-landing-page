import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import selectMenuElements from './utils/menu/selectMenuElements';
import toggleMobileMenu from './utils/menu/toggleMobileMenu';
import inputListener from './utils/form/validation';

Swiper.use([Navigation, Pagination]);

const App = () => {
  new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 22,
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    loop: true,
    breakpoints: {
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        loop: false,
      },
    },
  }).mount();
  toggleMobileMenu();
  selectMenuElements();
  inputListener();
};

App();
