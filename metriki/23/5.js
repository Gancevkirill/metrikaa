document.getElementById('button5').addEventListener('click', function() {
    var elem = document.getElementById('elem');
    var widthWithoutBorder = elem.clientWidth;
    console.log('Ширина элемента без границы: ' + widthWithoutBorder + 'px');
  });