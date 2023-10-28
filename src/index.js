import './styles.css'
import homeSection from './home.js';
import menuSection from './menu';
import contactSection from './contact';

// navigation tab buttons
const homeTabBtn = document.querySelector('#main-nav-bar #home');
const menuTabBtn = document.querySelector('#main-nav-bar #menu');
const ContactTabBtn = document.querySelector('#main-nav-bar #contact');

// main area where the content is displayed
const divContentArea = document.querySelector('div#content-area')


const tabArray = [
  homeSection,
  menuSection,
  contactSection,
]

divContentArea.append(...tabArray)

/**
 *  @param {string} elemID 'Element ID'
 */
const displayTab = function(elemID) {
  tabArray.forEach(elem => {
    if (elem.id === elemID) elem.hidden = false;
    else elem.hidden = true;
  })
}

homeTabBtn.addEventListener('pointerdown', function() {
  displayTab('home-content')
})

menuTabBtn.addEventListener('pointerdown', function() {
  displayTab('menu-content')
})

ContactTabBtn.addEventListener('pointerdown', function() {
  displayTab('contact-content')
})