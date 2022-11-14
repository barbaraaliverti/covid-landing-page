import $ from 'jquery';
// import jqueryValidate from 'jquery-validation';
const formInputGroup = $('.form__input');
const emailInput = $('.form__input__field');
const submitButton = $('.button--submit');
const inputMessage = $('.form__input__message');
const form = $('form');

const inputValidation = input => {
  if (input.validity.valid) {
    inputMessage.removeClass('form__input__message--error');
    inputMessage.html('');
    formInputGroup.removeClass('form__input--invalid');
  } else {
    inputMessage.addClass('form__input__message--error');
    inputMessage.html('This is not a valid email');
    formInputGroup.addClass('form__input--invalid');
  }
};

const inputListener = () => {
  emailInput.on('blur', event => {
    inputValidation(event.target);
  });

  // para não aparecer o tooltip de validação do browser:
  emailInput.on('invalid', event => {
    event.preventDefault();
    inputValidation(event.target);
  });

  form.on('submit', event => {
    event.preventDefault();
    emailInput.prop('disabled', true);
    submitButton.prop('disabled', true);
    inputMessage.addClass('form__input__message--sent');
    formInputGroup.addClass('form__input--sent');
    inputMessage.html('Thanks! You will receive a message from us shortly :)');
  });
};

export default inputListener;
