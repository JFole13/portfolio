var modal = document.getElementById('projectModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// When the user clicks on the project, open the modal 
document.querySelectorAll('.project').forEach(item => {
  item.addEventListener('click', function() {
    modal.style.display = "block";
    // You can also dynamically change the modal content here based on the project clicked
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on <span> (x), close the modal with animation
span.onclick = function() {
    modal.querySelector('.modal-content').classList.add('close');
    setTimeout(() => {
      modal.style.display = "none";
      modal.querySelector('.modal-content').classList.remove('close'); // Remove the class so it can animate again when reopened
    }, 100); // Should match the animation-duration
  }
  
  // Modify the existing window.onclick event as well
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.querySelector('.modal-content').classList.add('close');
      setTimeout(() => {
        modal.style.display = "none";
        modal.querySelector('.modal-content').classList.remove('close');
      }, 100); // Match the animation duration
    }
  }