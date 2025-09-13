
const container = document.getElementById('container');
console.log(container)
let layOut = 'row';

function changeLayout() {
    if (layOut === 'row') {
        layOut = 'column';
    } else {
        layOut = 'row';
    }
}

const button = document.getElementById('button');

button.addEventListener('click', () => {
    changeLayout();
    container.style.flexDirection = layOut;
})