import './styles.css'
import homeSection from './home.js';
import menuSection from './menu';
import contactSection from './contact';

// navigation tab buttons
const tabs = document.querySelectorAll('#main-nav-bar > button[role="tab"]');

// main area where the content is displayed
const divContentArea = document.querySelector('div#content-area');

const tabArray = [
  homeSection,
  menuSection,
  contactSection,
];

divContentArea.append(...tabArray);

/**
 *  @param {string} elemID 'Element ID'
 */
const displayTab = function(elemID) {
  tabArray.forEach(elem => {
    const ariaLabelledby = elem.getAttribute('aria-labelledby');
    if (ariaLabelledby === elemID) {
      elem.hidden = false;
    }
    else elem.hidden = true;
  })
};

tabs.forEach(function(tab) {
  tab.addEventListener('pointerdown', function() {
    displayTab(this.id)
  })
})