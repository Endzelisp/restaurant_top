// Tab section container
const homeSection = document.createElement('section');

// Set tab section properties
homeSection.id = 'home-content';
homeSection.role = 'tabpanel';
homeSection.tabIndex = '0';
homeSection.hidden = false;
homeSection.setAttribute('aria-labelledby', 'home');
homeSection.classList.add('fill-viewport');


//Content of the page
const title = 'Home';
const paragraph = 'Some interesting text that I want to show here!!';


homeSection.innerHTML = `
  <h2>${title}</h2>
  <p>${paragraph}</p>
`
export default homeSection;