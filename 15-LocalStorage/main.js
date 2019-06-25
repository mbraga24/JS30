const addItems = document.querySelector('.add-items');
const deleteItems = document.querySelector('.delete-items')
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];


function addItem(e) {
  e.preventDefault();
  // this: is the <form> element and .querySelector() will look for an item with the 'name' attribute.
  const text = this.querySelector("[name=item]");
  const item = {
    text: text.value,
    done: false
  }
  items.push(item);
  populateList(items, itemsList)
  localStorage.setItem("items", JSON.stringify(items))
  this.reset();
}

function populateList(plates = [], plateList) {
  const html = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join("");

  plateList.innerHTML = html
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; 
  const element = e.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items))
  populateList(items, itemsList);
}

function clearList(e) {
  e.preventDefault();
  while(itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
    items.shift()
  }
  localStorage.clear();
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
deleteItems.addEventListener('submit', clearList);
itemsList.addEventListener('click', toggleDone);


populateList(items, itemsList)