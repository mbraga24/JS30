const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
  e.preventDefault();
  // this: is the <form> element and .querySelector will look for an item with the 'name' attribute.
  const text = this.querySelector("[name=item]");
  const item = {
    text: text.value,
    done: false
  }
  items.push(item);
  populateList(items, itemsList)
  this.reset();
}

function populateList(plates = [], plateList) {
  const html = plates.map((plate, i) => {
    
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
        <label for="">${plate.text}</label>
      </li>
    `;
  }).join("");

  plateList.innerHTML = html
}

addItems.addEventListener('submit', addItem);