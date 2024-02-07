let elem = document.getElementById('elem');
elem.addEventListener('click', function() {
  alert(this.tagName);
});