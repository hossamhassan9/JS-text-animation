const text = document.querySelector('.title');
const stringText = text.textContent;
const splitText = stringText.split('');

text.textContent = '';

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += `<span>${splitText[i]}</span>`;
}
let character = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('span')[character];
  span.classList.add('fade');
  character++;

  if (character === splitText.length) {
    compelete();
    return;
  }
}

function compelete() {
  clearInterval(timer);
  timer = null;
}
