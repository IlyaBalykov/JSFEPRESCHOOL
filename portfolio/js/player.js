//container
const videoContainer = document.querySelector('.video-player-container');
const videoPlayer = document.querySelector('.viewer');

//controls
const controlPlay = videoContainer.querySelector('.player__play-btn');
const controlBack = videoContainer.querySelector('.player__play_back');
const controlProgress = videoContainer.querySelector('.player__progress');
const controlForward = videoContainer.querySelector('.player__play_forward');
const controlMute = videoContainer.querySelector('.player__volume-btn');
const controlVolume = videoContainer.querySelector('.player__volume');

//event listeners
videoPlayer.addEventListener("error", () => controlPlay.style.background = "url(\"./assets/svg/play.svg\") no-repeat center center");
videoPlayer.addEventListener("ended", () => controlPlay.style.background = "url(\"./assets/svg/play.svg\") no-repeat center center");
videoPlayer.addEventListener("canplaythrough", ready);
controlPlay.addEventListener("click", isPlaying);
controlBack.addEventListener("click", toBack);
controlProgress.addEventListener("input", progressControl);
controlForward.addEventListener("click", toForward);
controlMute.addEventListener("click", isMuted);
controlVolume.addEventListener("input", volumeControl);

//functions
function ready() {
  videoPlayer.setAttribute("max", videoPlayer.duration);
}

function isPlaying() {
  if(videoPlayer.paused) {
    videoPlayer.play()
    controlPlay.style.background = "url(\"./assets/svg/pause.svg\") no-repeat center center";
  } else {
    videoPlayer.pause()
    controlPlay.style.background = "url(\"./assets/svg/play.svg\") no-repeat center center";
  }
}

function toBack() {
  videoPlayer.currentTime-=5;
  controlProgress.value = videoPlayer.currentTime
}

function progressControl() {
  videoPlayer.currentTime = controlProgress.value
}

function toForward() {
  videoPlayer.currentTime+=5;
  controlProgress.value = videoPlayer.currentTime
}

function isMuted() {
  if(videoPlayer.volume === 0) {
    videoPlayer.volume = controlVolume.value
    controlMute.style.background = "url(\"./assets/svg/volume.svg\") no-repeat center center";
  } else {
    videoPlayer.volume = 0;
    controlMute.style.background = "url(\"./assets/svg/mute.svg\") no-repeat center center";
  }
}
function volumeControl() {
  videoPlayer.volume = controlVolume.value;
  if(controlMute.style.background !== "url(\"./assets/svg/volume.svg\") no-repeat center center") {
    controlMute.style.background = "url(\"./assets/svg/volume.svg\") no-repeat center center";
  }
}