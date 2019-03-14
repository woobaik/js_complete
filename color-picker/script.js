let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('.color-picker');
let h1 = document.querySelector('h1')


let backgroundChanger = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`
}

color1.addEventListener('change', backgroundChanger)
color2.addEventListener('change', backgroundChanger)




