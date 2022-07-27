const container = document.querySelector('#container');

const div = document.createElement('p');
div.setAttribute('style', 'color: red; background: white;');
div.classList.add('div');
div.textContent = "Hey Im red!";

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = "I'm a blue h3!"
blue.setAttribute('style', 'color: blue; background: white;');

const box = document.createElement('div');
box.textContent = " ";
box.setAttribute('style', 'color: blue; background: pink; border:1px solid black;');

const title = document.createElement('h1');
title.textContent = "I'm in a div";
title.setAttribute('style', 'color: black');


const text = document.createElement('p');
text.textContent = "Me TOO!!!!";
text.setAttribute('style', 'color: black');

box.appendChild(title);
box.appendChild(text);


container.appendChild(content);
container.appendChild(div);
container.appendChild(blue);
container.appendChild(box);

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    btn.addEventListener('click', alertFunction);
});