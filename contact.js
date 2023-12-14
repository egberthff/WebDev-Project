const contactForm = document.getElementById('contact-form');
const submitButton = document.querySelector('input[type="submit"]');
try {
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const subject = document.querySelector('input[name="subject"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();
    if (!name) {
      alert('Please enter your name.');
      return;
    }
    if (!email || !isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!subject) {
      alert('Please enter a subject.');
      return;
    }
    if (!message) {
      alert('Please enter a message.');
      return;
    }

    sendFormEmail(name, email, subject, message);
  });
} catch (error) {
  console.error(error);
}
function isValidEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
