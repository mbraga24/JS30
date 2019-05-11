const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(event) {
  // Check if the user has the shift key down
  // AND check if they are checking it.
  let inBetween = false;
  if (event.shiftKey && this.checked) {

    // Loop over every single checkbox.
    checkboxes.forEach(checkbox => {
      // Will change the value of 'inBetween' twice when shiftkey was held
      // and 2 distinct boxes checked.
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      // Will check all the boxes in between the two checkboxes evaluated
      // in the previous conditional.
      if (inBetween) {
        checkbox.checked = true;
      }
    })

  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
