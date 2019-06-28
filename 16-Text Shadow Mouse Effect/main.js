const hero = document.querySelector(".hero")
const text = hero.querySelector("h1")
const shadowing = 100;
let flag = false;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero  // ES6 Destructuring Assignment
  let { offsetX: x, offsetY: y } = e   // ES6 Destructuring Assignment

  // The '.target' is the thing that actually triggered on, whereas 'this' is the thing that you listened on.
  // The 'target' is what it got triggered on will sometimes change.
  if (this !== e.target) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  const xShadowing = Math.round((x / width * shadowing) -  (shadowing / 2))
  const yShadowing = Math.round((y / height * shadowing) -  (shadowing / 2))

  text.style.textShadow = `${xShadowing}px ${yShadowing}px 0 rgba(90, 90, 113, 0.2)`
}

hero.addEventListener("mousemove", (e) => {
  if (flag) {
    shadow(e)
  }
})
text.addEventListener("mouseover", () => {
  flag = true;
})