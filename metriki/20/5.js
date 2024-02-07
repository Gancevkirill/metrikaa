let ul = document.getElementsByTagName('ul')[0];
let arr = ['Предмет', 'Вещь', 'элемент3'];
for (let i = 0; i < arr.length; i++) {
  let li = document.createElement('li');
  li.textContent = arr[i];
  ul.appendChild(li);
}