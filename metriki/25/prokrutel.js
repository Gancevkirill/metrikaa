let elem = document.getElementById('elem');

document.getElementById('btn1').addEventListener('click', function() {
  console.log('Реальная высота: ' + elem.scrollHeight);
});

document.getElementById('btn2').addEventListener('click', function() {
  console.log('Реальная ширина: ' + elem.scrollWidth);
});

document.getElementById('btn3').addEventListener('click', function() {
  elem.scrollTop = elem.scrollHeight - 100;
});