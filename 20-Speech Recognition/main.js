window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p);

function greeting(responses, index) {
  let p = document.createElement('p');
  p.innerHTML = responses[index]
  let lastChild = words.lastChild
  lastChild.appendChild(p)
}

function fetchWeather(responses, index) {
  let p = document.createElement('p');
  p.innerHTML = responses[index];
  let lastChild = words.lastChild
  lastChild.appendChild(p)
}

function fetchWeather2(responses, index) {
  let p = document.createElement('p');
  p.innerHTML = responses[index];
  let lastChild = words.lastChild
  lastChild.appendChild(p)
}

function chilling() {
  let p = document.createElement('p');
  p.innerHTML = "I'm chilling, sir!";
  let lastChild = words.lastChild
  lastChild.appendChild(p)
}

recognition.addEventListener('result', (e) => {
  // console.log(e.results)
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript).join("")
  
  p.textContent = transcript

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
  if (transcript.includes("hi Jarvis") || transcript.includes("hello Jarvis")) {
    let responses = ["Hello, sir!", "Hi! How may I help you, sir?"]
    let index = Math.floor(Math.random() * responses.length)

    greeting(responses, index)
  } else if (transcript.includes("Jarvis get me the weather") || transcript.includes("Jarvis give me the weather")) {
    let responses = ["At once, sir!", "Not a problem, sir.", "Not a problem. Hopefully it won't rain. I know how much that upsets you."];
    let index = Math.floor((Math.random() * responses.length))

    fetchWeather(responses, index)
  } else if (transcript.includes("what's up Jarvis")) {

  }

  console.log(transcript)
})

recognition.addEventListener('end', recognition.start)

recognition.start();