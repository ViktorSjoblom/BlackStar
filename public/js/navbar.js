// Navbar

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


// Navbar Hamburger
/* When you click at the hamburger, the menu appears */
const hamburger = document.getElementById('hamburger-div');
const background = document.getElementById('hamburger-menu');
const closeButton = document.getElementById('close');

console.log(hamburger);




        hamburger.addEventListener('click', function() {
          if (window.innerWidth >= 1200) {
            background.classList.add('activeDesktop');
          }else {
            background.classList.add('activeMobile');
          }
        });

        closeButton.addEventListener('click', function() {
            if (window.innerWidth >= 1200) {
              background.classList.remove('activeDesktop');
            }else {
              background.classList.remove('activeMobile');
            }
          });