window.addEventListener('keydown', function(e) {
  // console.log(e.keyCode);
  // console.log("current time: " + e.currentTime);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(key);
  // console.log(audio);
  if(!audio) return; // This will stop the function from running all together.
  audio.currentTime = 0;  // Rewind to the start
  audio.play();
});
