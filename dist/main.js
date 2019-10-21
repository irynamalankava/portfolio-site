

window.onload = function() {
  document.querySelector("body").classList.add("all-loaded");
}

const menuBtn  = document.querySelector('.menu-btn');
const menuNav  = document.querySelector('.menu');
const navItems  = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');


//adding active class to nav items after scroll
function changeNavItemState() {
  let index = sections.length;
  const offset = 50;

  while(--index && window.scrollY + offset < sections[index].offsetTop) {
    
  }
  navItems.forEach((item) => item.classList.remove('active'));
  navItems[index].classList.add('active');  
}

//Making header fixed after scrolling
function fixedHeader(){
  const nav = document.querySelector('header');
  if(this.scrollY <= 15) nav.className = ''; 
  else nav.className = 'scroll';
};

//Making Name moving on the nav bar after scrolling
function changeNameVisibility(){
  const name = document.getElementById('header-name');
  this.scrollY >= 15 ?
    name.style.visibility = "visible":
    name.style.visibility = "hidden"  
};

window.onscroll= function(){
  changeNavItemState();
  fixedHeader();
  changeNameVisibility();
}
//window.addEventListener('scroll', changeLinkState);
//window.addEventListener('scroll', fixedHeader);







//Set initial state of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

//Menu button toogle 
function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'))

        //Set Menu state
        showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        
        //Set Menu state
        showMenu = false;
    }

}



