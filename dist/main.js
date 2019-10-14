//window.onload()
//Menu button toogle 

const menuBtn  = document.querySelector('.menu-btn');

const menuNav  = document.querySelector('.menu');
const navItems  = document.querySelectorAll('.nav-item');


//Making header fixed after scrolling
function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 100 < sections[index].offsetTop) {
    
  }
  navItems.forEach((item) => item.classList.remove('active'));
  navItems[index].classList.add('active');
  
  
}
function fixedHeader(){
  const nav = document.querySelector('header');
  if(this.scrollY <= 15) nav.className = ''; 
  else nav.className = 'scroll';
};

//changeLinkState();
/*window.onscroll= function(){
  changeLinkState();
  fixedHeader();
}*/
window.addEventListener('scroll', changeLinkState);


window.addEventListener('scroll', fixedHeader);

//Making Name moving on the nav bar after scrolling
/*window.onscroll = () => {
    const name = document.querySelector('.moving-name');
    if(this.scrollY >= 15) {name.classList.add('scroll1');
  }};*/





//Set initial state of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'))

        //Set Menu state
        showMenu = true;
    }
    else{
        menuBtn.classList.toggle('ccc1') .remove('close');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        
        //Set Menu state
        showMenu = false;
    }

}
//adding active class to nav items onscroll
//const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');



//changing LinkedIn icon class in media query max-width: 576px

/*window.onresize = () =>{
    const linkedInIcon = document.querySelector("#linkedIn1");
    if (window.width()<=576){
        linkedInIcon.classList.remove('fa-3x');
        linkedInIcon.classList.add('fa-2x');
    }
}*/