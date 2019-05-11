const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(event) {
  // Check if the user has the shift key down
  // AND check if they are checking it.
  let inBetween = false;
  if (event.shiftKey && this.checked) {

    // Loop over every single checkbox.
    checkboxes.forEach(checkbox => {
      
    })

  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
