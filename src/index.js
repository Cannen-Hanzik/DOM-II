import './less/index.less'

// Your code goes here!
window.onload = function(evt) {
    const heading = document.querySelector('h1');
    heading.textContent = "LEEEEEEET'S GOOOOOO!!!";
}

const heading = document.querySelector('h1');
function hide(){
    heading.hidden = true;
}
heading.addEventListener('mouseover', hide);


const funBus = document.querySelector('img');
function zoomIn(event){
    let scale = 1;
    event.preventDefault();

    scale += event.deltaY * -0.05;

    scale = Math.min(Math.max(.15, scale), 4);

    funBus.style.transform = `scale(${scale})`;
}
funBus.addEventListener('wheel', zoomIn);

const imageMan = document.querySelector('.img-content img');
function dblClick(){
    imageMan.classList.toggle('large');
}
imageMan.addEventListener('dblclick', dblClick);

const copyRightRemove = document.querySelector('.footer p');
function remover(){
    copyRightRemove.remove();
}
copyRightRemove.addEventListener('mouseout', remover);

