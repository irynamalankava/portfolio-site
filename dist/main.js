//Making header fixed after scrolling
window.onscroll = () => {
    const nav = document.querySelector('header');
    if(this.scrollY <= 15) nav.className = ''; else nav.className = 'scroll';
  };

//Making Name moving on the nav bar after scrolling
window.onscroll = () => {
    const name = document.querySelector('moving-name');
    if(this.scrollY >= 15) {name.classList.add('scroll1');
  }};
//Menu button toogle 

const menuBtn  = document.querySelector('.menu-btn');

const menuNav  = document.querySelector('.menu');
const navItems  = document.querySelectorAll('.nav-item');

//Set initial state of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu)

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

//changing LinkedIn icon class in media query max-width: 576px

window.onresize = () =>{
    const linkedInIcon = document.querySelector("#linkedIn1");
    if (window.width()<=576){
        linkedInIcon.classList.remove('fa-3x');
        linkedInIcon.classList.add('fa-2x');
    }
}