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


// faq section

const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for (let i=0; i< q.length; i++){
    //add click event to all qestions
    q[i].addEventListener('click', () => {
        a[i].classList.toggle('a-opened');

        arr[i].classList.toggle('arrow-rotated');
    })
}





