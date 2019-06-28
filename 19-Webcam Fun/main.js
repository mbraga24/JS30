const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

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
      video.srcObject = localMediaStream;
      video.play()
    })
    .catch(error => {
      alert("There was an error when connecting to your camera. When asked, please allow application to access your camera.");
      console.log("There was an error when connecting to your camera. Please, allow application to access your camera.", error);
    });
}

function repeatOften() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;
  
  ctx.drawImage(video, 0, 0, width, height)

  requestAnimationFrame(repeatOften);
}

requestAnimationFrame(repeatOften);

getVideo()