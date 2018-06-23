var mouseEvent = false;
var mouseX = 0;
var mouseY = 0;

function delta(s1,s2,dt){
    return s1 + dt*(s2 - s1);
}

function handleMouse(){
    mouseEvent = true;
    mouseX = event.clientX;
    mouseY = event.clientY;
}

function followMouse(element, dt){
    
    var startX = element.getBoundingClientRect().left;
    var startY = element.getBoundingClientRect().top;
    
    var targetX = mouseX - element.offsetWidth/2;
    var targetY = mouseY - element.offsetHeight/2;
    
    var newX = delta(startX,targetX,dt);
    var newY = delta(startY,targetY,dt);
    
    console.log(newX);
    setTransform(element,newX,newY);
}

document.onmousemove = handleMouse;

function setTransform(element,dx,dy){
    var transform = `translateX(${dx}px) translateY(${dy}px)`;

    element.style.transform = transform;
}

window.requestAnimationFrame(draw);
function draw(){
    if(mouseEvent){
        followMouse(document.getElementById("el1"),0.2);
    }
    window.requestAnimationFrame(draw);
}

window.onload = function(){
    var el1 = document.getElementById("el1");
    // var el2 = document.getElementById("el2");
}