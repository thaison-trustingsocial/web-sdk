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
  const flashIntensity = document.getElementById("flash-intensity").value;

  // Face settings
  const minFarFaceRatio = document.getElementById("min-far-face-ratio").value;
  const maxFarFaceRatio = document.getElementById("max-far-face-ratio").value;
  const closeFaceRatio = document.getElementById("close-face-ratio").value;

  // Mask settings
  const smallScale = document.getElementById("small-scale").value;
  const largeScale = document.getElementById("large-scale").value;
  const ovalPaddingLeft = document.getElementById("oval-padding-left").value;
  const ovalPaddingRight = document.getElementById("oval-padding-right").value;
  const ovalPaddingTop = document.getElementById("oval-padding-top").value;
  const ovalPaddingBottom = document.getElementById("oval-padding-bottom").value;
  const ovalVerticalOffset = document.getElementById("oval-vertical-offset").value;
  const chinToMaskBottomPadding = document.getElementById("chin-to-mask-bottom-padding").value;

  // Close eyes settings
  const useCloseEyesDetector = document.getElementById("use-close-eyes-detector").checked;
  const closeEyesTimeout = document.getElementById("close-eyes-timeout").value;

  // Debug settings
  const debug = document.getElementById("log-debugging-info").checked;

  return {
    frameSettings: {
      frameInterval,
    },
    flashSettings: {
      framePerColor,
      colorsLength,
      colors,
      colorDelay,
      useFaceDetector,
      flashIntensity,
    },
    faceSettings: {
      minFarFaceRatio,
      maxFarFaceRatio,
      closeFaceRatio,
    },
    maskSettings: {
      smallScale,
      largeScale,
      ovalPaddingLeft,
      ovalPaddingRight,
      ovalPaddingTop,
      ovalPaddingBottom,
      ovalVerticalOffset,
      chinToMaskBottomPadding,
    },
    closeEyesSettings: {
      enable: useCloseEyesDetector,
      timeout: closeEyesTimeout,
    },
    debug
  }
}

// prettier-ignore
function setFlashLivenessSettings(settings) {
  // Frame settings
  document.getElementById("frame-interval").value = settings.frameSettings.frameInterval;

  // Flash settings
  document.getElementById("frame-per-color").value = settings.flashSettings.framePerColor;
  document.getElementById("colors-length").value = settings.flashSettings.colorsLength;
  document.getElementById("color-delay").value = settings.flashSettings.colorDelay;
  document.getElementById("use-face-dectector").checked = settings.flashSettings.useFaceDetector;
  document.getElementById("flash-intensity").value = settings.flashSettings.flashIntensity;

  // Face settings
  document.getElementById("min-far-face-ratio").value = settings.faceSettings.minFarFaceRatio;
  document.getElementById("max-far-face-ratio").value = settings.faceSettings.maxFarFaceRatio;
  document.getElementById("close-face-ratio").value = settings.faceSettings.closeFaceRatio;

  // Mask settings
  document.getElementById("small-scale").value = settings.maskSettings.smallScale;
  document.getElementById("large-scale").value = settings.maskSettings.largeScale;
  document.getElementById("oval-padding-left").value = settings.maskSettings.ovalPaddingLeft;
  document.getElementById("oval-padding-right").value = settings.maskSettings.ovalPaddingRight;
  document.getElementById("oval-padding-top").value = settings.maskSettings.ovalPaddingTop;
  document.getElementById("oval-padding-bottom").value = settings.maskSettings.ovalPaddingBottom;
  document.getElementById("oval-vertical-offset").value = settings.maskSettings.ovalVerticalOffset;
  document.getElementById("chin-to-mask-bottom-padding").value = settings.maskSettings.chinToMaskBottomPadding;

  // Close eyes settings
  document.getElementById("use-close-eyes-detector").checked = settings.closeEyesSettings.enable;
  document.getElementById("close-eyes-timeout").value = settings.closeEyesSettings.timeout;

  // Debug settings
  document.getElementById("log-debugging-info").checked = settings.debug;
}

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
const settings = {
  frameSettings: {},
  flashSettings: {},
  faceSettings: {},
  maskSettings: {},
  closeEyesSettings: {},
  debug: false,
};

// Default settings
settings.frameSettings.frameInterval = 0;

settings.flashSettings.framePerColor = 4;
settings.flashSettings.colorsLength = 8;
settings.flashSettings.colorDelay = 120;
settings.flashSettings.useFaceDetectorWhenFlashing = false;
settings.flashSettings.flashIntensity = 1;

settings.faceSettings.minFarFaceRatio = isMobile ? 0.85 : 0.8;
settings.faceSettings.maxFarFaceRatio = isMobile ? 0.9 : 0.9;
settings.faceSettings.closeFaceRatio = isMobile ? 0.95 : 0.82;

settings.maskSettings.smallScale = isMobile ? 0.65 : 0.6;
settings.maskSettings.largeScale = isMobile ? 0.9 : 0.85;
settings.maskSettings.ovalPaddingLeft = isMobile ? 20 : 30;
settings.maskSettings.ovalPaddingRight = isMobile ? 20 : 30;
settings.maskSettings.ovalPaddingTop = isMobile ? 0 : 0;
settings.maskSettings.ovalPaddingBottom = isMobile ? 20 : 20;
settings.maskSettings.ovalVerticalOffset = isMobile ? 60 : 0;
settings.maskSettings.chinToMaskBottomPadding = isMobile ? 20 : 20;

settings.closeEyesSettings.enable = false;
settings.closeEyesSettings.timeout = 5;

settings.debug = false;

setFlashLivenessSettings(settings);
