
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let pressed = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Screen resize function
function handleResize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function controllLineWidth(){
    if(!pressed){
        const repeat = setInterval(function(){
            ctx.lineWidth = ctx.lineWidth + 0.5;
            if(pressed === false){
                clearInterval(repeat);
                ctx.lineWidth = 1;
            }
        },1500);
    }
}

function startDrawing(){
    pressed = true;
}

function stopDrawing(){
    pressed = false;
}

function handleMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    
    if(!pressed){
        // 마우스를 눌렀을 때
        controllLineWidth();
        ctx.beginPath();
        ctx.moveTo(x,y);
       
    }
    else{
        // 마우스를 땠을 때
        ctx.lineTo(x, y);
        ctx.stroke();

    }
}

function init(){
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove',handleMove);
    canvas.addEventListener('mousedown',startDrawing);
    canvas.addEventListener('mouseup',stopDrawing);
    canvas.addEventListener('mouseleave',stopDrawing);
}

init();