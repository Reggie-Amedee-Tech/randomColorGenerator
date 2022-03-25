let buttons = document.getElementsByClassName('button');
let windows = document.getElementsByClassName('box-window')

let btnsArr = Array.from(buttons);
let wndsArr = Array.from(windows)

function changeColor1 () {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    wndsArr[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function changeColor2 () {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    wndsArr[1].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function changeColor3 () {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    wndsArr[2].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

btnsArr[0].addEventListener('click', changeColor1)
btnsArr[1].addEventListener('click', changeColor2)
btnsArr[2].addEventListener('click', changeColor3)