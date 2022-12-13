console.log('hello')
const menubtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn_burger');
const menu = document.querySelector('.nav');

const nav =document.querySelector('.menu-nav');
const item = document.querySelectorAll('.menu-nav_item')

let showMenu = false;



menubtn.addEventListener('click',tooglebar);

function tooglebar(){
    if(!showMenu){
        burger.classList.add('open');
        menu.classList.add('open');
        nav.classList.add('open');
        item.forEach(item => item.classList.add('open'));
        showMenu=true;

     } 
     else {
        burger.classList.remove('open');
        menu.classList.remove('open');
        nav.classList.remove('open');
        item.forEach(item => item.classList.remove('open'));
        showMenu=false;
    }
}
