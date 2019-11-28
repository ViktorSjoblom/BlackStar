'use strict';

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

