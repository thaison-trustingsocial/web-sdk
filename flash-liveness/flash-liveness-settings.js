// prettier-ignore
function getFlashLivenessSettings() {
  // Frame settings
  const frameInterval = document.getElementById("frame-interval").value;

  // Flash settings
  const framePerColor = document.getElementById("frame-per-color").value;
  const colorsLength = document.getElementById("colors-length").value;
  const colors = document.getElementById("colors").value;
  const colorDelay = document.getElementById("color-delay").value;
  const useFaceDetector = document.getElementById("use-face-dectector").checked;
  const useCloseEyesDetector = document.getElementById("use-close-eyes-detector").checked;
  const flashIntensity = document.getElementById("flash-intensity").value;

  // Face settings
  const minFarFaceRatio = document.getElementById("min-far-face-ratio").value;
  const maxFarFaceRatio = document.getElementById("max-far-face-ratio").value;
  const closeFaceRatio = document.getElementById("close-face-ratio").value;
  const useNewFaceDetector = document.getElementById("use-new-face-detector").checked;

  // Mask settings
  const smallScale = document.getElementById("small-scale").value;
  const largeScale = document.getElementById("large-scale").value;
  const ovalPaddingLeft = document.getElementById("oval-padding-left").value;
  const ovalPaddingRight = document.getElementById("oval-padding-right").value;
  const ovalPaddingTop = document.getElementById("oval-padding-top").value;
  const ovalPaddingBottom = document.getElementById("oval-padding-bottom").value;
  const ovalVerticalOffset = document.getElementById("oval-vertical-offset").value;

  // Debug settings
  const debug = document.getElementById("log-debugging-info").checked;

  return {
    frameInterval,
    framePerColor,
    colorsLength,
    colors,
    colorDelay,
    useFaceDetector,
    useCloseEyesDetector,
    flashIntensity,
    minFarFaceRatio,
    maxFarFaceRatio,
    closeFaceRatio,
    useNewFaceDetector,
    smallScale,
    largeScale,
    ovalPaddingLeft,
    ovalPaddingRight,
    ovalPaddingTop,
    ovalPaddingBottom,
    ovalVerticalOffset,
    debug,
  };
}
