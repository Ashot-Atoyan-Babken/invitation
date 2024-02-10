let run = document.querySelector('.run');
run.addEventListener('mouseover', () => {
  run.style.top = Math.floor(Math.random() * 250) + 'px';
  run.style.bottom = Math.floor(Math.random() * 250) + 'px';
  run.style.position = 'relative';
});

document.querySelector('.yes').addEventListener('click', () => {
  alert('YEEEEEEEEEEEEES');
});
