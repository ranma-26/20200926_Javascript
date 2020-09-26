'use script'

const click = document.querySelector('.open');
const apper = document.querySelector('.apper');

click.addEventListener('click',() =>{
  apper.classList.toggle('inview');
});

