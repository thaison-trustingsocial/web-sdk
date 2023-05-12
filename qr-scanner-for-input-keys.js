/* eslint-disable vars-on-top */
/* eslint-disable no-var */
const placeholderEl = document.getElementById('keys-input-placeholder');

placeholderEl.insertAdjacentHTML(
  'beforeend',
  `<div id="loadingMessage" hidden>🎥 Unable to access video stream (please make sure you have a webcam enabled)</div>
  <canvas id="canvas" style="width: 100%; max-width: 640px" hidden></canvas>`
);

var video = document.createElement('video');
var canvasElement = document.getElementById('canvas');
var canvas = canvasElement.getContext('2d');
var loadingMessage = document.getElementById('loadingMessage');

var videoStream;

var keyType = 'api';

// eslint-disable-next-line no-unused-vars
function startQRScan(type) {
  if (typeof type === 'string') {
    keyType = type;
  } else {
    keyType = null;
  }

  loadingMessage.hidden = false;
  loadingMessage.innerText = '⌛ Loading video...';
  const keyParsedPlaceholder = keyType ? document.getElementById('logKey-parse') : document.getElementById('key-parse');
  keyParsedPlaceholder.innerHTML = '';
  // Use facingMode: environment to attemt to get the front camera on phones
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(function (stream) {
    video.srcObject = stream;
    video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
    video.play();
    videoStream = stream;
    // eslint-disable-next-line no-use-before-define
    requestAnimationFrame(tick);
  });
}

function drawLine(begin, end, color) {
  canvas.beginPath();
  canvas.moveTo(begin.x, begin.y);
  canvas.lineTo(end.x, end.y);
  canvas.lineWidth = 4;
  canvas.strokeStyle = color;
  canvas.stroke();
}

function onScanQRDone(qr) {
  // stop camera
  videoStream.getTracks().forEach(function (track) {
    track.stop();
  });
  canvasElement.hidden = true;
  if (keyType === 'log') {
    importLogKeys(qr);
  } else {
    // eslint-disable-next-line no-undef
    importKeys(qr); 
  }
}

function tick() {
  let shouldStop = false;
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    loadingMessage.hidden = true;
    canvasElement.hidden = false;

    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    // eslint-disable-next-line no-undef
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: 'dontInvert',
    });
    if (code) {
      shouldStop = true;
      drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
      drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
      drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
      drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');

      setTimeout(() => {
        onScanQRDone(code.data);
      }, 250);
    }
  }
  if (!shouldStop) requestAnimationFrame(tick);
}
