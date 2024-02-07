document.getElementById('button3').addEventListener('click', function() {
    var elem = document.getElementById('elem');
    var totalWidth = elem.offsetWidth;
    console.log('Полная ширина элемента: ' + totalWidth + 'px');
  });