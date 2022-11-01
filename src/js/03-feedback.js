'use strict';
import throttle from 'lodash.throttle';
import localStorageApi from './localstorage';

const getEmailValue = document.querySelector('.feedback-form');

const CONTACT_FORM_KEY = 'feedback-form-state';

const fillContactFild = form => {
  const { elements: contactFormEl } = form;

  const formData = localStorageApi.load(CONTACT_FORM_KEY);

  if (!formData) {
    return;
  }

  const keys = Object.keys(formData);

  for (const key of keys) {
    contactFormEl[key].value = formData[key];
  }
};

const handeleEmeilForm = throttle(({ target }) => {
  const contactFormElementName = target.name;
  const contactFormElementValue = target.value;

  const formData = localStorageApi.load(CONTACT_FORM_KEY) || {};

  formData[contactFormElementName] = contactFormElementValue;
  console.log(contactFormElementName, contactFormElementValue);
  localStorageApi.save(CONTACT_FORM_KEY, formData);
}, 500);

const hendlContactFormSubmit = event => {
  event.preventDefault();
  event.target.reset();
  localStorageApi.remove(CONTACT_FORM_KEY);
};

getEmailValue.addEventListener('input', handeleEmeilForm);
getEmailValue.addEventListener('submit', hendlContactFormSubmit);

fillContactFild(getEmailValue);
