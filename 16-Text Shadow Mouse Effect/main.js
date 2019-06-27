const hero = document.querySelector(".hero")
const text = hero.querySelector("h1")
const walk = 50;

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;

  let y = e.offsetY;
  let x = e.offsetX;

  // The '.target' is the thing that actually triggered on, whereas 'this' is the thing that you listened on.
  // The 'target' is what it got triggered on will sometimes change.
  if (this !== e.target) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  const xWalk = Math.round((x / width * walk) - (walk / 3))
  const yWalk = Math.round((y / height * walk) - (walk / 4))

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(90, 90, 113, 0.2)`

}

hero.addEventListener("mousemove", shadow)