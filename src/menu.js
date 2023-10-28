// Tab section container
const menuSection = document.createElement('section');

// Set tab section properties
menuSection.id = 'menu-content';
menuSection.role = 'tabpanel';
menuSection.hidden = true;
menuSection.classList.add('fill-viewport');


//Content of the page
const title = 'Menu';
const paragraph = 'All the food we have available to order!!';


menuSection.innerHTML = `
  <h2>${title}</h2>
  <p>${paragraph}</p>
`
export default menuSection;