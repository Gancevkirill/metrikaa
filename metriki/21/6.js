var ol = document.querySelector('ol');
var button = document.querySelector('button');

button.addEventListener('click', function() {
  var lastChild = ol.lastElementChild;
  ol.removeChild(lastChild);
});