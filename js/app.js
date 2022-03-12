const homeBtn = document.querySelector('.home-btn')
const activityBtn = document.querySelector('.activity-btn')
const pageBtn = document.querySelector('.pages-btn')
const homedropDown = document.querySelector('#dropdown-content-home')
const activityDropDown = document.querySelector('#dropdown-content-activity')
const pagesDropDown = document.querySelector('#dropdown-content-pages')

const showMeu = (menu) => {
  menu.classList.toggle("show");
}
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.addEventListener("scroll", reveal);
homeBtn.addEventListener('mouseover',() => {
  showMeu(homedropDown)
})
activityBtn.addEventListener('mouseover',()=> {
showMeu(activityDropDown)
})
pageBtn.addEventListener('mouseover', () => {
  showMeu(pagesDropDown)
})