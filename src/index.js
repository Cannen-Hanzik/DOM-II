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

window.addEventListener('copy', () => {
    navigator.clipboard.readText()
        .then(text => {
            console.log(text)
        })
})

function mKey(event){
    if(event.key === 'm'){
        event.target.classList.toggle('mirror');
    }
}
document.body.addEventListener('keydown', mKey);

document.body.addEventListener('mousemove', evt => {
    const { clientX, clientY } = evt;
    console.log(`Mouse is at ${clientX}, ${clientY}.`);
});

const destinations = document.querySelectorAll('.destination');
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold';
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial';
    })
}
