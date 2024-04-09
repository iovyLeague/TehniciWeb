// JavaScript


// Get the header element
const header = document.getElementById('mainHeader');

// Calculate the scroll position to trigger fixed header
const scrollTrigger = header.offsetTop;

// Function to handle scrolling
function handleScroll() {
  if (window.pageYOffset > scrollTrigger) {
    // Add 'fixed' class to header when scrolled past scrollTrigger
    header.classList.add('fixed');
  } else {
    // Remove 'fixed' class when not scrolled past scrollTrigger
    header.classList.remove('fixed');
  }
}

// Add scroll event listener to window
window.addEventListener('scroll', handleScroll);




