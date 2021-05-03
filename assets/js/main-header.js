/*===== EXPANDER MENU  =====*/ 
const showMainMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  
    if(toggle && nav){
      toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
      })
    }
  }
  showMainMenu('main-header-toggle','main-nav-menu')

  /*===== ACTIVE AND REMOVE MENU =====*/
const mainnavLink = document.querySelectorAll('.main-nav__link');   

function linkAction(){
  /*Active link*/
  mainnavLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}
mainnavLink.forEach(n => n.addEventListener('click', linkAction));