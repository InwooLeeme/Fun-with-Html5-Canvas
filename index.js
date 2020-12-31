
const canvas = document.querySelector('.canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function handleResize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function init(){
    window.addEventListener('resize', handleResize);
}

init();