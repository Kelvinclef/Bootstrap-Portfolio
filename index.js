const contactform = document.querySelector('.contact-form');
const container = document.querySelector('.container');

contactform.addEventListener('submit', (event) => {
event.preventDefault();
container.innerHTML = '<p>Thanks for your message. <br /> I\'ll respond to you shortly</p>';
});