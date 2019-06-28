const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

console.log(timeNodes)
let seconds = timeNodes
  .map(node => {
    return node.dataset.time
  })
  .map(datatime => {
   const [min, secs] = datatime.split(":").map(parseFloat)
   return (min * 60) + secs;
}).reduce((total, videoSecond) => total + videoSecond)

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft %  3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, minutes, secondsLeft)