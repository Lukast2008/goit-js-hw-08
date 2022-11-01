import throttle from 'lodash.throttle';

const getEmailValue = document.querySelector('.feedback-form');

const getMassageValue = document.querySelector('message');

const handleButtonSub = document.querySelector('button');

getEmailValue.addEventListener('submit', event => {
  event.preventDefault();
  let eventValue = event.target.email.value;
  console.log(eventValue);
});
