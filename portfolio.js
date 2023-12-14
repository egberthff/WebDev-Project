 const token = "ghp_4MvgiYzaIuu";
 const token2 ="Z4sjndDZLNWAZ" 
 const token3 = "BbGOJY1kD8hi"
 const repoUrl = 'https://api.github.com/users/egberthff/repos';
 
 const fetchRepositories = async () => {
   try {
     const response = await fetch(repoUrl, {
       headers: {
         Authorization: `token ${token}${token2}${token3}`,
       },
     });
     if (!response.ok) {
       const errorText = await response.text();
       console.error(`Error fetching repositories: ${errorText}`);
       const repositoryList = document.querySelector('.carousel-track');
       repositoryList.innerHTML = '';
       const repositoryElement = document.createElement('div');
       repositoryElement.classList.add('repository');
       const repositoryNameElement = document.createElement('h3');
       repositoryNameElement.textContent = `Error Fecthing Data`;
       repositoryElement.appendChild(repositoryNameElement);
       repositoryList.appendChild(repositoryElement);
     } else {
       const repositories = await response.json();
       let displayedReposCount = 3;
       displayRepositories(repositories.slice(0, displayedReposCount));
       document.getElementById('see-more-button').addEventListener('click', () => {
         if (displayedReposCount >= repositories.length) {
           displayedReposCount = 3;
           displayRepositories(repositories.slice(0, displayedReposCount));
           document.getElementById('see-more-button').textContent = 'See More -->';
         } else {
           displayedReposCount = repositories.length;
           displayRepositories(repositories.slice(0, displayedReposCount));
           document.getElementById('see-more-button').textContent = 'See Less <--';
         }
       });
     }
   } catch (error) {
     console.error('Error fetching repositories:', error);
   }
 
   function displayRepositories(repos) {
     const repositoryList = document.querySelector('.carousel-track');
     repositoryList.innerHTML = '';
     repos.forEach(repository => {
       const repositoryElement = createRepositoryElement(repository);
       repositoryList.appendChild(repositoryElement);
     });
 
     const slides = Array.from(repositoryList.children);
     let currentSlide = 0;
 
     const nextButton = document.querySelector('#nextBtn');
     nextButton.addEventListener('click', e => {
       if (currentSlide === slides.length - 1) {
         currentSlide = 0;
       } else {
         currentSlide++;
       }
       repositoryList.style.transform = 'translateX(-' + currentSlide * slides[0].clientWidth + 'px)';
     });
 
     const prevButton = document.querySelector('#prevBtn');
     prevButton.addEventListener('click', e => {
       if (currentSlide === 0) {
         currentSlide = slides.length - 1;
       } else {
         currentSlide--;
       }
       repositoryList.style.transform = 'translateX(-' + currentSlide * slides[0].clientWidth + 'px)';
     });
   }
 };
 
 function createRepositoryElement(repository) {
   const repositoryElement = document.createElement('div');
   repositoryElement.classList.add('repository');
   const repositoryPreviewElement = document.createElement('div');
   repositoryPreviewElement.classList.add('repository-preview');
   if (repository.image) {
     const repositoryImageElement = document.createElement('img');
     repositoryImageElement.src = repository.image;
     repositoryPreviewElement.appendChild(repositoryImageElement);
   } else {
     const repositoryInitialsElement = document.createElement('span');
     repositoryInitialsElement.textContent = repository.name.charAt(0);
     repositoryPreviewElement.appendChild(repositoryInitialsElement);
   }
   repositoryElement.appendChild(repositoryPreviewElement);
   const repositoryInfoElement = document.createElement('div');
   repositoryInfoElement.classList.add('repository-info');
   const repositoryNameElement = document.createElement('h3');
   repositoryNameElement.textContent = repository.name;
   repositoryInfoElement.appendChild(repositoryNameElement);
   const repositoryDescriptionElement = document.createElement('p');
   repositoryDescriptionElement.textContent = repository.description;
   repositoryInfoElement.appendChild(repositoryDescriptionElement);
   const repositoryLanguageElement = document.createElement('p');
   repositoryLanguageElement.textContent = `Language: ${repository.language}`;
   repositoryInfoElement.appendChild(repositoryLanguageElement);
   const repositoryVisibilityElement = document.createElement('p');
   repositoryVisibilityElement.textContent = `Visibility: ${repository.visibility}`;
   repositoryInfoElement.appendChild(repositoryVisibilityElement);
   const repositoryOwnerElement = document.createElement('p');
   repositoryOwnerElement.innerHTML = `Owner: <img src="${repository.owner.avatar_url}" alt="Owner avatar" style="height: 20px; width: 20px; border-radius: 5px; margin-left: 2px; margin-top: 4px"> ${repository.owner.login}`;
   repositoryInfoElement.appendChild(repositoryOwnerElement);
   const repositoryDownloadElement = document.createElement('a');
   repositoryDownloadElement.href = repository.downloadUrl;
   repositoryDownloadElement.textContent = 'Download';
   repositoryInfoElement.appendChild(repositoryDownloadElement);
   repositoryElement.appendChild(repositoryInfoElement);
   return repositoryElement;
 }
 
 fetchRepositories();
 