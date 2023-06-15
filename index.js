let btn = document.querySelector('button');
let content = document.querySelector('.content');
btn.addEventListener('click', changeContent);

function changeContent() {
    content.innerText = "Hello World!";
}