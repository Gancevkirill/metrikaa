var liList = document.querySelectorAll('ol li');

for (var i = 0; i < liList.length; i++) {
  liList[i].addEventListener('click', function() {
    this.parentNode.removeChild(this);
  });
}