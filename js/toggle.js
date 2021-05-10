
burger=document.querySelector('.burger');
navlist=document.querySelector('.nav-list');
rightnav=document.querySelector('.rightNav');
navba=document.querySelector('.navba');

burger.addEventListener('click',function(){

navlist.classList.toggle('v-class-resp');
rightnav.classList.toggle('v-class-resp');
navba.classList.toggle('h-nav-resp');


});

