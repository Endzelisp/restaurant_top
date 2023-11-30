import './styles.css'
import homeSection from './home.js';
import menuSection from './menu';
import contactSection from './contact';

// navigation tab buttons
const tabs = document.querySelectorAll('#main-nav-bar > button[role="tab"]');

// main area where the content is displayed
const divContentArea = document.querySelector('div#content-area');

const tabPanelsArray = [
  homeSection,
  menuSection,
  contactSection,
];

divContentArea.append(...tabPanelsArray);

/**
 *  @param {string} elemID 'Element ID'
 */
const displayTabPanel = function(elemID) {
  tabPanelsArray.forEach(elem => {
    const ariaLabelledby = elem.getAttribute('aria-labelledby');
    if (ariaLabelledby === elemID) {
      elem.hidden = false;
    }
    else elem.hidden = true;
  })
};

tabs.forEach(function(tab) {
  // add an event listener to each nav menu tab
  tab.addEventListener('pointerdown', function(e) {
    // get the pointed tab
    const pointedTab = e.currentTarget;
    // display the corresponding tab panel
    displayTabPanel(this.id)
    // loop over each tab to update the aria-selected attr
    tabs.forEach(function(currentTab) {
      const isSelected = pointedTab.id === currentTab.id;
      currentTab.setAttribute('aria-selected', isSelected);
    })
  })
})
