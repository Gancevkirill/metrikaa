var parent = document.querySelector('#parent');
var child = document.querySelector('#child');
var button = document.querySelector('button');

button.addEventListener('click', function() {
  parent.removeChild(child);
});