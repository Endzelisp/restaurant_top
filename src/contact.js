// Tab section container
const contactSection = document.createElement('section');

// Set tab section properties
contactSection.id = 'contact-content';
contactSection.role = 'tabpanel';
contactSection.hidden = true;
contactSection.classList.add('fill-viewport');


//Content of the page
const title = 'Contact';
const paragraph = 'Contact information';
const address = 'Main Avenue, with Bread Street, store #145'


contactSection.innerHTML = `
  <h2>${title}</h2>
  <p>${paragraph}</p>
  <address>${address}</address>
`
export default contactSection;