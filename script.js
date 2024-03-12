let projectModal = document.querySelector('.project-modal');

let modalCloseButton = document.querySelector('.modal-close-btn');

document.querySelectorAll('.project').forEach(item => {
  item.addEventListener('click', function() {
    projectModal.style.display = "flex";
  });
});

modalCloseButton.onclick = function() {
  projectModal.style.display = "none";
}

// window.onclick = function(event) {
//   if (event.target == projectModal) {
//     projectModal.style.display = "none";
//   }
// }

// modalCloseButton.onclick = function() {
//   projectModal.querySelector('.modal-content').classList.add('close');
//     setTimeout(() => {
//       projectModal.style.display = "none";
//       projectModal.querySelector('.modal-content').classList.remove('close'); // Remove the class so it can animate again when reopened
//     }, 100);
//   }
  
//   window.onclick = function(event) {
//     if (event.target == projectModal) {
//       projectModal.querySelector('.modal-content').classList.add('close');
//       setTimeout(() => {
//         projectModal.style.display = "none";
//         projectModal.querySelector('.modal-content').classList.remove('close');
//       }, 100); // Match the animation duration
//     }
//   }