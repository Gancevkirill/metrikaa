document.getElementById('button2').addEventListener('click', function() {
    var elem = document.getElementById('elem');
    var leftBorderWidth = elem.clientLeft;
    console.log('Толщина левой границы: ' + leftBorderWidth + 'px');
  });