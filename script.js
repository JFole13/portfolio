// () => {
//   const projectModal = document.querySelector('.project-modal');
// }

const projectModal = document.querySelector('.project-modal');
const modalTitle = document.querySelector('.modal-title');
const modalDescriptionContainer = document.querySelector('.modal-description-container');
const modalImg = document.querySelector('.modal-img');
const modalCloseButton = document.querySelector('.modal-close-btn');
const modalStackIconsContainer = document.querySelector('.modal-stack-icons-container');
const modalLink = document.querySelector('.modal-link-a');

const createModalStackIcon = (src, alt) => {
  const icon = document.createElement('img');
  icon.classList.add('modal-stack-icon');
  icon.src = src;
  icon.setAttribute('alt', alt);

  return icon;
} 

const saltyPreview = document.querySelector('.salty-project');
const weddingPreview = document.querySelector('.wedding-project');
const aliggettdesignsPreview = document.querySelector('.aliggettdesigns-project');
const kylePreview = document.querySelector('.kyle-project');


const generateSaltyPreviewContent = () => {
  modalTitle.innerHTML = 'SALTY League';
  modalDescriptionContainer.innerHTML = `
    <p>My most recent and favorite project as of right now, <strong>SALTY League</strong> is a custom scoring system for me 
        and my buddies fantasy football league.</p>
    <p>We wanted a way to see the victor over a span of multiple years instead of one, and that's when we 
        came up with the points system that SALTY uses.</p>
    <p>Using the Sleeper API, SALTY automatically takes each week's matchup outcomes and calculates the 
        player's SALTY score, updates all rankings and displays corresponding activity messages.</p>`;
  modalImg.src = 'images/salty-modal-preview.svg';
  modalStackIconsContainer.innerHTML = '';

  modalStackIconsContainer.append(createModalStackIcon('images/javascript-logo.png', 'JavaScript Logo'));
  modalStackIconsContainer.append(createModalStackIcon('images/node-logo.png', 'Node.js Logo'));
  modalStackIconsContainer.append(createModalStackIcon('images/postgresql-logo.png', 'PostgreSQL Logo'));

  const gitHubIcon = createModalStackIcon('images/github-logo.png', 'GitHub Logo');
  gitHubIcon.classList.add('modal-stack-icon');
  const gitHubIconLink = document.createElement('a');
  gitHubIconLink.href = 'https://github.com/JFole13/salty-league';
  gitHubIconLink.target = '_blank';
  gitHubIconLink.append(gitHubIcon);
  modalStackIconsContainer.append(gitHubIconLink);
  modalLink.href = 'https://saltyleague.cc/';
  modalLink.target = '_blank';
}

const generateWeddingPreviewContent = () => {
  modalTitle.innerHTML = 'Wedding Website';
  modalDescriptionContainer.innerHTML = `
    <p><strong>I'm getting married this year!</strong></p>
    <p>Every wedding needs a good wedding website so I wanted to make my own.</p>
    <p>It has a details section accompanied by the venues location through the Google Maps API. 
        The RSVP and message board inputs are handled through MongoDB. </p>`;
  modalImg.src = 'images/wedding-modal-preview.svg';
  modalStackIconsContainer.innerHTML = '';

  modalStackIconsContainer.append(createModalStackIcon('images/javascript-logo.png', 'JavaScript Logo'));
  modalStackIconsContainer.append(createModalStackIcon('images/bootstrap-logo.png', 'BootStrap Logo'));
  modalStackIconsContainer.append(createModalStackIcon('images/mongodb-logo.png', 'MongoDB Logo'));

  const gitHubIcon = createModalStackIcon('images/github-logo.png', 'GitHub Logo');
  gitHubIcon.classList.add('modal-stack-icon');
  const gitHubIconLink = document.createElement('a');
  gitHubIconLink.href = 'https://github.com/JFole13/wedding';
  gitHubIconLink.target = '_blank';
  gitHubIconLink.append(gitHubIcon);
  modalStackIconsContainer.append(gitHubIconLink);
  modalLink.href = 'https://breandjessefoley.com/';
  modalLink.target = '_blank';
}

const generateALiggettDesignsPreviewContent = () => {
  modalTitle.innerHTML = 'A Liggett Designs';
  modalDescriptionContainer.innerHTML = `
    <p>This is a current <strong>work in progress</strong>, but we have a live beta version of the online clothing shop. </p>
    <p>Client has access to a simple CMS I created, where she can update almost everything on the screen to her liking.
        Products can be added, updated, or deleted as well. </p>
    <p>Products listed can be purchased through Venmo as of right now, while we are working and testing on adding other types 
        of payment support.</p>`;
  modalImg.src = 'images/a-liggett-designs-modal-preview.svg';
  modalStackIconsContainer.innerHTML = '';

  modalStackIconsContainer.append(createModalStackIcon('images/javascript-logo.png', 'JavaScript Logo'));
  modalStackIconsContainer.append(createModalStackIcon('images/node-logo.png', 'Node.js Logo'));
  modalStackIconsContainer.append(createModalStackIcon('images/bootstrap-logo.png', 'BootStrap Logo'));
  modalStackIconsContainer.append(createModalStackIcon('images/postgresql-logo.png', 'PostgreSQL Logo'));

  const gitHubIcon = createModalStackIcon('images/github-logo.png', 'GitHub Logo');
  gitHubIcon.classList.add('modal-stack-icon');
  const gitHubIconLink = document.createElement('a');
  gitHubIconLink.href = 'https://github.com/JFole13/a-ligget-designs';
  gitHubIconLink.target = '_blank';
  gitHubIconLink.append(gitHubIcon);
  modalStackIconsContainer.append(gitHubIconLink);
  modalLink.href = 'https://aliggettdesigns.com/';
  modalLink.target = '_blank';
}

const generateKylePreviewContent = () => {
  modalTitle.innerHTML = 'Kyle Thompson';
  modalDescriptionContainer.innerHTML = `
    <p>Static site <strong>portfolio</strong> for my colleague.</p>
    <p>Display's projects, work experience, and written works.</p>`;
  modalImg.src = 'images/kyle-portfolio-modal-preview.svg';
  modalStackIconsContainer.innerHTML = '';

  modalStackIconsContainer.append(createModalStackIcon('images/javascript-logo.png', 'JavaScript Logo'));

  const gitHubIcon = createModalStackIcon('images/github-logo.png', 'GitHub Logo');
  gitHubIcon.classList.add('modal-stack-icon');
  const gitHubIconLink = document.createElement('a');
  gitHubIconLink.href = 'https://github.com/JFole13/kyle';
  gitHubIconLink.target = '_blank';
  gitHubIconLink.append(gitHubIcon);
  modalStackIconsContainer.append(gitHubIconLink);
  modalLink.href = 'https://kylet.net/';
  modalLink.target = '_blank';
}

saltyPreview.addEventListener('click', generateSaltyPreviewContent);
weddingPreview.addEventListener('click', generateWeddingPreviewContent);
aliggettdesignsPreview.addEventListener('click', generateALiggettDesignsPreviewContent);
kylePreview.addEventListener('click', generateKylePreviewContent);

document.querySelectorAll('.project').forEach(item => {
  item.addEventListener('click', function() {
    projectModal.style.display = "flex";
  });
});

modalCloseButton.onclick = function() {
  projectModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == projectModal) {
    projectModal.style.display = "none";
  }
}