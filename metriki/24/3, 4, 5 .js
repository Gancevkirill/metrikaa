let elem = document.getElementById('elem');

document.getElementById('Кнопка №1').addEventListener('click', function() {
  console.log('Прокрутка сверху: ' + elem.scrollTop);
});

document.getElementById('Кнопка №2').addEventListener('click', function() {
  console.log('Прокрутка слева: ' + elem.scrollLeft);
});

document.getElementById('Кнопка №3').addEventListener('click', function() {
  elem.scrollTop = 100;
});

document.getElementById('Кнопка №4').addEventListener('click', function() {
  elem.scrollTop += 100;
});