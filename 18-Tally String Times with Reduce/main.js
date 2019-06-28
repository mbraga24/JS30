const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

console.log(timeNodes)
let seconds = timeNodes.map(nodes => {
  return nodes.dataset.time
}).map(datatime => {
   [min, secs] = datatime.split(":").map(parseFloat)
   return [min, secs]
}).reduce((total, videoSec) => total + videoSec)

console.log(seconds)