const navigationLinks = document.querySelectorAll('nav a');

for (const link of navigationLinks) {
  link.addEventListener('click', handleNavigationClick);
}
function handleNavigationClick(event) {
  event.preventDefault();

  const targetSection = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetSection);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
