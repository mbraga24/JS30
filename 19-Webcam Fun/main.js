const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const take_photo = document.querySelector('.btn-photo');
const red_filter = document.querySelector('.btn-red-fil');
const blue_filter = document.querySelector('.btn-blue-fil');
let press = "";

function getVideo() {
  const constraints = {
    video: true,
    audio: false
  }
  navigator.mediaDevices.getUserMedia(constraints)
    .then(localMediaStream => {
      // console.log(localMediaStream)
      // According to MDN documentation:
      /*
        In older versions of the Media Source specification, attaching a stream to a <video> 
        element required creating an object URL for the MediaStream. This is no longer necessary, 
        and browsers are removing support for doing this.

        solution for this issue:
        https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
      */
      if ('srcObject' in video) {
        video.srcObject = localMediaStream;
      } else {
        // Avoid using this in new browsers, as it is going away.
        video.src = URL.createObjectURL(mediaSource);
      }
      video.play()
    })
    .catch(error => {
      alert("There was an error when connecting to your camera. Next time we ask, please allow application to access your camera.");
      console.log("There was an error when connecting to your camera. Please, allow application to access your camera.", error);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;
  
  ctx.drawImage(video, 0, 0, width, height)

  // Take the pixels out.
  let pixels = ctx.getImageData(0, 0, width, height);
  // Check color and runfilter
  checkColor(pixels)

  requestAnimationFrame(paintToCanvas);
}

function checkColor(pixels) {
  if (press === "red") {
    // Change values.
    pixels = redEffect(pixels);
  } else if (press === "blue") {
    // Change values.
    pixels = blueEffect(pixels);
  }
  runFilter(pixels)
}

function runFilter(pixels) {
  if (press !== "") {
    ctx.putImageData(pixels, 0, 0);
  }
}

function takePhoto() {
  // Play the sound
  snap.currentTime = 0;
  snap.play()

  // Take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  // Base64 - text based representation of a picture.
  // console.log(data)
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'smartCookie');
  // link.textContent = 'Download Image';
  link.innerHTML = `<img src="${data}" alt="selfie" />`
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  return pixels = doEffect(pixels, 151, 50, 0.5)
}

function blueEffect(pixels) {
  return pixels = doEffect(pixels, 49, 0.5, 210)
}

function doEffect(pixels, red, green, blue) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    if (red > 150 && blue < 30) {
      // RED
      pixels.data[i + 0] = pixels.data[i + 0] + red;
      pixels.data[i + 1] = pixels.data[i + 1] - green;
      pixels.data[i + 2] = pixels.data[i + 2] * blue;  
    } else if (red < 50 && blue > 200) {
      // BLUE
      pixels.data[i + 0] = pixels.data[i + 0] + red;
      pixels.data[i + 1] = pixels.data[i + 1] * green;
      pixels.data[i + 2] = pixels.data[i + 2] + blue;  
    }
  }
  return pixels;
}

// ON PAGE LOAD
getVideo()

// requestAnimationFrame() will also run on page load. 
// requestAnimationFrame(paintToCanvas);

// Adding the 'canplay' event listener to 'video' to run paintToCanvas 
// is another alternative for running the function on page load
video.addEventListener("canplay", paintToCanvas);
take_photo.addEventListener("click", takePhoto);
red_filter.addEventListener("mousedown", () => {
  if (press === "") {
    press = "red";
  } else {
    press = ""
  }
});
blue_filter.addEventListener("mousedown", () => {
  if (press === "") {
    press = "blue";
  } else {
    press = ""
  }
});