var input = document.querySelector('input');
var button = document.querySelector('button');

button.addEventListener('click', function() {
  var clonedInput = input.cloneNode(true);
  document.body.appendChild(clonedInput);
});