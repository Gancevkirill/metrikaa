document.getElementById('button1').addEventListener('click', function() {
    var elem = document.getElementById('elem');
    var topBorderWidth = elem.clientTop;
    console.log('Толщина верхней границы: ' + topBorderWidth + 'px');
  });