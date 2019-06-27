const bands = ['The Red Hot chili peppers', 'Nirvana', 'Queens', 'Guns and Roses ', 'The Cure', 'Jack Johnson', 'The Beautiful Girls', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sorted = document.querySelector("#bands")

function strip(bandName) {
  return bandName.replace('/^(the |a |an )/i')
}

function displayNames(bands) {
  const html = bands.map(band => {
    return `
      <li>
        ${band}
      </li>
    `
  }).join("");
  sorted.innerHTML = html;
}

const sortedBands = bands.sort((a,b) => {
  if (strip(a) > strip(b)) {
    return 1;
  } else {
    return -1;
  }
})

displayNames(sortedBands)

console.log(sortedBands)