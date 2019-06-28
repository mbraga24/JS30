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
      console.log(localMediaStream)
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
    });

}

getVideo()