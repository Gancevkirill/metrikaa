document.getElementById('button4').addEventListener('click', function() {
    var elem = document.getElementById('elem');
    var totalHeight = elem.offsetHeight;
    console.log('Полная высота элемента: ' + totalHeight + 'px');
  });