document.addEventListener('DOMContentLoaded', (event) => {
    const text = `Name: Sherwin George Bush Sajulga
    Age: 20
    Gender: Male
    Location: Philippines
    Education:
    - Currently taking Bachelor's Degree in Information Technology at Bohol Island State University - Balilihan Campus
    Career:
    - Started as a Software Engineer at Google
    - Later joined Microsoft as a Senior AI Researcher
    - Currently working as a Chief Technology Officer at a promising AI startup
    Achievements:
    - Published several influential papers in the field of machine learning
    - Received the "Innovator of the Year" award from TechCrunch in 2022
    Personal Life:
    - Enjoys hiking, reading, and playing the piano in his free time
    - Actively involved in various community service initiatives
    
    PS: Eme EMe ra ang uban na details `;

    let i = 0;
    let timer;

    function typeWriter() {
        if (i < text.length) {
            bioElement.innerHTML += text.charAt(i);
            i++;
            timer = setTimeout(typeWriter, 50);
        }
    }

    const bioElement = document.getElementById('bio');
    const heroContent = document.querySelector('.hero-content');
    const learnMoreButton = document.getElementById('learn-more');
    heroContent.style.width = '100%';
    learnMoreButton.addEventListener('click', function (event) {
        event.preventDefault();
        if (bioElement.classList.contains('hidden')) {
            bioElement.classList.remove('hidden');
            heroContent.style.width = '30%';
            bioElement.style.width = '70%';
            typeWriter();
        } else {
            clearTimeout(timer);
            bioElement.innerText = '';
            i = 0;
            bioElement.classList.add('hidden');
            heroContent.style.width = '100%';
            heroContent.style.flexGrow = '1';
        }
    });
});
