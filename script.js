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
const hindsitePreview = document.querySelector('.hindsite-project');
const blackjackPreview = document.querySelector('.blackjack-project');

const generateSaltyPreviewContent = () => {
  modalTitle.innerHTML = 'SALTY League';
  modalDescriptionContainer.innerHTML = `
    <p class="modal-description-text">My most recent and favorite project as of right now, <strong>SALTY League</strong> is a custom scoring system for me 
        and my buddies fantasy football league.</p>
    <p class="modal-description-text">We wanted a way to see the victor over a span of multiple years instead of one, and that's when we 
        came up with the points system that SALTY uses.</p>
    <p class="modal-description-text">Using the Sleeper API, SALTY automatically takes each week's matchup outcomes and calculates the 
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
    <p class="modal-description-text"><strong>I'm getting married this year!</strong></p>
    <p class="modal-description-text">Every wedding needs a good wedding website so I wanted to make my own.</p>
    <p class="modal-description-text">It has a details section accompanied by the venues location through the Google Maps API. 
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
    <p class="modal-description-text">This is a current <strong>work in progress</strong>, but we have a live beta version of the online clothing shop. </p>
    <p class="modal-description-text">Client has access to a simple CMS I created, where she can update almost everything on the screen to her liking.
        Products can be added, updated, or deleted as well. </p>
    <p class="modal-description-text">Listed products can be purchased through Venmo as of right now, while we are working and testing on adding other types 
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
    <p class="modal-description-text">Static site <strong>portfolio</strong> for my colleague.</p>
    <p class="modal-description-text">Display's projects, work experience, and written works.</p>`;
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

const generateHindsitePreviewContent = () => {
  modalTitle.innerHTML = 'hindsite';
  modalDescriptionContainer.innerHTML = `
    <p class="modal-description-text"><strong>hindsite</strong> is a trend tracker for all 32 teams in the NHL. After every single matchup, <strong>hindsite</strong>
        will sort the data in the proper categories, like adding a win in the "Away Win" and "Away Over 6" Category if the Colorado
        Avalanche beat the Calgary Flames 5-3 up in Canada.</p>
    <p class="modal-description-text">Unfortunately the project is defunct for now, as some as the necessary packages aren't supported anymore. I loved this 
        one though, since it was one of my biggest and was able to practice using multiple technologies in one project.</p>`;
  modalImg.src = 'images/hindsite-modal-preview.svg';
  modalStackIconsContainer.innerHTML = '';

  modalStackIconsContainer.append(createModalStackIcon('images/python-logo.png', 'Python Logo'));
  modalStackIconsContainer.append(createModalStackIcon('images/javascript-logo.png', 'JavaScript Logo'));
  modalStackIconsContainer.append(createModalStackIcon('images/node-logo.png', 'Node JS Logo'));
  modalStackIconsContainer.append(createModalStackIcon('images/mysql-logo.png', 'MySQL Logo'));

  const gitHubIcon = createModalStackIcon('images/github-logo.png', 'GitHub Logo');
  gitHubIcon.classList.add('modal-stack-icon');
  const gitHubIconLink = document.createElement('a');
  gitHubIconLink.href = 'https://github.com/JFole13/hindsite';
  gitHubIconLink.target = '_blank';
  gitHubIconLink.append(gitHubIcon);
  modalStackIconsContainer.append(gitHubIconLink);
  modalLink.href = '#';
  modalLink.target = '_self';
}

const generateBlackJackPreviewContent = () => {
  modalTitle.innerHTML = 'Blackjack';
  modalDescriptionContainer.innerHTML = `
    <p class="modal-description-text">This is a game of normal <strong>blackjack</strong>, with the options to double down and pay insurance. It's a static site,
        with game logic being handled with vanilla javascript. Animations are made with plain CSS.</p>
    <p class="modal-description-text">This is my very first project I made by myself when I first started getting into web development and it's still one of my
        favorites. It's a classic game that still holds up as a solid project. This is one that I look at and am still proud of
        over the years of creating things.</p>`;
  modalImg.src = 'images/blackjack-modal-preview.svg';
  modalStackIconsContainer.innerHTML = '';

  modalStackIconsContainer.append(createModalStackIcon('images/javascript-logo.png', 'JavaScript Logo'));

  const gitHubIcon = createModalStackIcon('images/github-logo.png', 'GitHub Logo');
  gitHubIcon.classList.add('modal-stack-icon');
  const gitHubIconLink = document.createElement('a');
  gitHubIconLink.href = 'https://github.com/JFole13/blackjack';
  gitHubIconLink.target = '_blank';
  gitHubIconLink.append(gitHubIcon);
  modalStackIconsContainer.append(gitHubIconLink);
  modalLink.href = 'https://jessefoley.com/blackjack/index.html';
  modalLink.target = '_blank';
}

saltyPreview.addEventListener('click', generateSaltyPreviewContent);
weddingPreview.addEventListener('click', generateWeddingPreviewContent);
aliggettdesignsPreview.addEventListener('click', generateALiggettDesignsPreviewContent);
kylePreview.addEventListener('click', generateKylePreviewContent);
hindsitePreview.addEventListener('click', generateHindsitePreviewContent);
blackjackPreview.addEventListener('click', generateBlackJackPreviewContent);

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