// Get references to elements
const modal = document.getElementById('myModal');
const openBtn = document.getElementById('share');
const closeBtn = document.getElementById('closeModalBtn');
const toast = document.getElementById('toast');

// Open the modal
openBtn.onclick = function () {
  modal.style.display = 'block';
};

function closeModal() {
  modal.style.animation = 'fadeOut 0.3s ease-in-out';
  setTimeout(function () {
    modal.style.display = 'none';
    modal.style.animation = ''; // Reset animation for future use
    toast.textContent = '';
  }, 280);
}

// Close the modal
closeBtn.onclick = closeModal;

// Close the modal if the overlay is clicked
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
