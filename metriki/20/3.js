let elems = document.getElementsByClassName('www');
for (let i = 0; i < elems.length; i++) {
  elems[i].innerHTML += elems[i].tagName.toLowerCase();
}