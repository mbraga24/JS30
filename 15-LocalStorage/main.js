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
  console.table(items)
  this.reset();
}

addItems.addEventListener('submit', addItem);