let run = document.querySelector('.run');
let iframe = document.querySelector('iframe');
let h2 = document.querySelector('h2');
let answer = [
  'Ոնց չէ Անահիտ?🤨',
  'Անահիտ?😐',
  'էէէէէէ ինչ անհետաքրքիր մարդ դուրս եկար 😒',
  'բոժե մոյ 🤦',
  'լավ մտածի 😑',
];
run.addEventListener('mouseover', () => {
  let r = Math.floor(Math.random() * answer.length);
  run.style.top = Math.floor(Math.random() * 70) + 'px';
  run.style.bottom = Math.floor(Math.random() * 70) + 'px';
  run.style.left = Math.floor(Math.random() * 70) + 'px';
  run.style.right = Math.floor(Math.random() * 70) + 'px';
  run.style.position = 'relative';
  run.innerHTML = 'ՈՉ 💔';
  iframe.src = 'https://giphy.com/embed/d1E1msx7Yw5Ne1Fe';
  h2.innerHTML = answer[r];
});

document.querySelector('.yes').addEventListener('click', () => {
  iframe.src = 'https://giphy.com/embed/RLDl4nXpaKNGtsMRH6';
  h2.innerHTML = 'Այ ապրես 😊';
  setTimeout(() => {
    alert('Ուռաաաաաա դե կսպասեմ ❤️');
  }, 1000);
});
setInterval(() => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  h2.style.color = `rgb(${r},${g},${b})`;
}, 1000);
