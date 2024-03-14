// () => {
//   const projectModal = document.querySelector('.project-modal');
// }

const projectModal = document.querySelector('.project-modal');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');


const saltyPreview = document.querySelector('.salty-project');


const generateSaltyPreviewContent = () => {
  console.log('hello')
}

saltyPreview.addEventListener('click', generateSaltyPreviewContent);



{/* <div class="modal-content">
            <div class="modal-title-container">
                <h2 class="modal-title">SALTY League</h2>
            </div>
            <div class="modal-description">
                <p>My most recent and favorite project as of right now, <strong>SALTY League</strong> is a custom scoring system for me 
                    and my buddies fantasy football league.</p>
                <p>We wanted a way to see the victor over a span of multiple years instead of one, and that's when we 
                    came up with the points system that SALTY uses.</p>
                <p>Using the Sleeper API, SALTY automatically takes each week's matchup outcomes and calculates the 
                    player's SALTY score, updates all rankings and displays corresponding activity messages.</p>
            </div>
            <div class="test">
                <img src="images/salty-modal-preview.svg" alt="">
                <p class="modal-close-btn">×</p>
            </div>
            <div class="modal-stack-icons-container">
                <img class="modal-stack-icon" src="images/javascript-logo.png" alt="JavaScript Logo">
                <img class="modal-stack-icon" src="images/node-logo.png" alt="Node.js Logo">
                <img class="modal-stack-icon" src="images/postgresql-logo.png" alt="PostgreSQL Logo">
                <a href="https://github.com/JFole13/salty-league" target="_blank"><img class="modal-stack-icon" src="images/github-logo.png" alt="PostgreSQL Logo"></a>
            </div>
            <div class="modal-link-container d-flex align-items-center justify-content-center">   
                <p class="modal-link hvr-fade"><a href="https://saltyleague.cc/" target="_blank">Visit Site</a></p>
            </div>
        </div> */}
let modalCloseButton = document.querySelector('.modal-close-btn');

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