var element = document.querySelector('element');

element.addEventListener('click', function() {
  element.parentNode.removeChild(element);
});