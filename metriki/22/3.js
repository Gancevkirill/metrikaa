let elem = document.querySelector("#elem");
let children = elem.children;
for (let child of children) {
  child.textContent += "!";
}