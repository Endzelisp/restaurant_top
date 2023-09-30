import './styles.css'
import { homeElements } from './home';
import { menuElements } from './menu';
import { contactElements } from './contact';

// navigation list elements
const navElemHome = document.querySelector('#main-nav-bar #home');
const navElemMenu = document.querySelector('#main-nav-bar #menu');
const navElemContact = document.querySelector('#main-nav-bar #contact');

// main area where the content is displayed
const divContentArea = document.querySelector('div#content-area')

/**
 * 
 * @param {string} elemID 'HTML Element ID'
 * @param {Array.<HTMLElement>} elementContent 'Array of HTML elements'
 * @param {boolean} isVisible 'True if the element must be visible, false otherwise'
 * 
 */
const createElementContainer = function(elemID, elementContent) {

  let isElemVisible = false;
  const id = elemID;
  // Set HTML element with classes and content
  const div = document.createElement('div');
  div.id = elemID;
  div.classList.add('fill-viewport', 'non-visible');
  elementContent.forEach((elem) => div.appendChild(elem));

  return {
    getHtmlElement: function() {
      return div;
    },
    setVisibility: function(isVisible) {
      if (isVisible) {
        isElemVisible = true;
        div.classList.remove('non-visible');
      }
      else {
        isElemVisible = false;
        div.classList.add('non-visible');
      }
    },
    isVisible: function() {
      return isElemVisible;
    },
    getID: function() {
      return id;
    }

  };
}

const pagesArray = [
  createElementContainer('home-content', homeElements),
  createElementContainer('menu-content', menuElements),
  createElementContainer('contact-content', contactElements)
]

pagesArray.forEach((elem, index) => {
  if (index === 0) {
    elem.setVisibility(true)
  }
  divContentArea.appendChild(elem.getHtmlElement())
})

/**
 *  @param {string} elemID 'Element ID'
 */
const displayElement = function(elemID) {
  pagesArray.forEach(elem => {
    if (elem.getID() === elemID) elem.setVisibility(true);
    else elem.setVisibility(false);
  })
}

navElemHome.addEventListener('pointerdown', function() {
  displayElement('home-content')
})

navElemMenu.addEventListener('pointerdown', function() {
  displayElement('menu-content')
})

navElemContact.addEventListener('pointerdown', function() {
  displayElement('contact-content')
})