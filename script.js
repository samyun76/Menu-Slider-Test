const header = document.querySelector('header');
const menuButton = document.querySelector('.menu_button');

menuButton.addEventListener('click', ()=>{
	header.classList.add('showHeader');
	menuButton.classList.add('hideMenu');
})

header.addEventListener('click', ()=>{
	header.classList.remove('showHeader');
	menuButton.classList.remove('hideMenu');
})



const sticky = menuButton.offsetTop;

window.onscroll = function(){
	if(window.scrollY > sticky){
		
		menuButton.classList.add('sticky');
		header.classList.add('sticky');
		
	}else{
		menuButton.classList.remove('sticky');
		header.classList.remove('sticky');

	}
	
}