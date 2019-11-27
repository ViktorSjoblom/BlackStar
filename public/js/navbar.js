// Navbar


let prevScrollpos = window.pageYOffset;
window.onscroll = () =>  {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.nav-bar').style.top = "0";
  } else {
    document.querySelector('.nav-bar').style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}














// // Navbar Hamburger
// /* When you click at the hamburger, the menu appears */
// const hamburger = document.getElementById('hamburger-div');
// const background = document.getElementById('hamburger-menu');
// const closeButton = document.getElementById('close');

// console.log(hamburger);




//         hamburger.addEventListener('click', function() {
//           if (window.innerWidth >= 1200) {
//             background.classList.add('activeDesktop');
//           }else {
//             background.classList.add('activeMobile');
//           }
//         });

//         closeButton.addEventListener('click', function() {
//             if (window.innerWidth >= 1200) {
//               background.classList.remove('activeDesktop');
//             }else {
//               background.classList.remove('activeMobile');
//             }
//           });