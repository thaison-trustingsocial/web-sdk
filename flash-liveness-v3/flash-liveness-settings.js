// prettier-ignore
function getFlashLivenessSettings() {
  // Capture frame settings
  const framesBatchingEnabled = document.getElementById("frames-batching-enable").checked;
  const framesBatchLength = document.getElementById("frames-batch-length").value;
  const frameInterval = document.getElementById("frame-interval").value;

  // Flash settings
  const framePerColor = document.getElementById("frame-per-color").value;
  const colorsLength = document.getElementById("colors-length").value;
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

  // Liveness settings
  const livenessTimeout = document.getElementById('liveness-timeout').value;
  const enableFarStep = document.getElementById('enable-far-step').checked;

  const clientSettings = {
    "capture_frame_settings": {
      "enable": Boolean(framesBatchingEnabled),
      "frames_batch_length": parseInt(framesBatchLength),
      "frames_interval_time": parseInt(frameInterval)
    },
    "close_eyes_settings": {
      "enable": Boolean(useCloseEyesDetector),
      "timeout": parseInt(closeEyesTimeout)
    },
    "face_settings": {
      "close_face_ratio": parseInt(closeFaceRatio),
      "max_far_face_ratio": parseInt(maxFarFaceRatio),
      "min_far_face_ratio": parseInt(minFarFaceRatio),
      "mobile": {
        "close_face_ratio": parseInt(closeFaceRatio),
        "max_far_face_ratio": parseInt(maxFarFaceRatio),
        "min_far_face_ratio": parseInt(minFarFaceRatio)
      }
    },
    "flash_settings": {
      "colors_length": parseInt(colorsLength),
      "delay_between_colors": parseInt(colorDelay),
      "flash_intensity": parseInt(flashIntensity),
      "frames_per_color": parseInt(framePerColor),
      "use_face_detector_when_flashing": Boolean(useFaceDetector)
    },
    "liveness_settings": {
      "enable_far_step": Boolean(enableFarStep),
      "timeout": parseInt(livenessTimeout)
    },
    "mask_settings": {
      "chin_to_mask_bottom_padding": parseInt(chinToMaskBottomPadding),
      "large_scale": parseInt(largeScale),
      "mobile": {
        "chin_to_mask_bottom_padding": parseInt(chinToMaskBottomPadding),
        "large_scale": parseInt(largeScale),
        "oval_padding": {
          "bottom": parseInt(ovalPaddingBottom),
          "left": parseInt(ovalPaddingLeft),
          "right": parseInt(ovalPaddingRight),
          "top": parseInt(ovalPaddingTop)
        },
        "oval_vertical_offset": parseInt(ovalVerticalOffset),
        "small_scale": parseInt(smallScale)
      },
      "oval_padding": {
        "bottom": parseInt(ovalPaddingBottom),
        "left": parseInt(ovalPaddingLeft),
        "right": parseInt(ovalPaddingRight),
        "top": parseInt(ovalPaddingTop)
      },
      "oval_vertical_offset": parseInt(ovalVerticalOffset),
      "small_scale": parseInt(smallScale)
    }
  }

  return {
    clientSettings,
    debug
  }
}

// prettier-ignore
function setFlashLivenessSettings(settings) {
  // Frame settings
  document.getElementById("frames-batching-enable").checked = settings.captureFramesSettings.framesBatchingEnabled;
  document.getElementById("frames-batch-length").value = settings.captureFramesSettings.framesBatchLength;
  document.getElementById("frame-interval").value = settings.captureFramesSettings.frameInterval;

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

  // Liveness settings
  document.getElementById('liveness-timeout').value = settings.livenessSettings.timeout;
  document.getElementById('enable-far-step').checked = settings.livenessSettings.enableFarStep;

  // Debug settings
  document.getElementById("log-debugging-info").checked = settings.debug;

}

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
const settings = {
  captureFramesSettings: {},
  flashSettings: {},
  faceSettings: {},
  maskSettings: {},
  closeEyesSettings: {},
  livenessSettings: {},
  debug: false,
};

// Default settings
settings.captureFramesSettings.frameInterval = 0;
settings.captureFramesSettings.framesBatchLength = 10;
settings.captureFramesSettings.framesBatchingEnabled = false;

settings.flashSettings.framePerColor = 4;
settings.flashSettings.colorsLength = 10;
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

settings.livenessSettings.timeout = 30;
settings.livenessSettings.enableFarStep = true;

settings.debug = false;

setFlashLivenessSettings(settings);
