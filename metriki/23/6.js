document.getElementById('button6').addEventListener('click', function() {
    var elem = document.getElementById('elem');
    var heightWithoutBorder = elem.clientHeight;
    console.log('Высота элемента без границы: ' + heightWithoutBorder + 'px');
  });