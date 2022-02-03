//Container
export const videoContainer = document.querySelector('.video-player-container');
export const videoPlayer = document.querySelector('.viewer');

//Controls
export const controlPlay = videoContainer.querySelector('.player__play-btn');
export const controlBack = videoContainer.querySelector('.player__play_back');
export const controlProgress = videoContainer.querySelector('.player__progress');
export const controlForward = videoContainer.querySelector('.player__play_forward');
export const controlMute = videoContainer.querySelector('.player__volume-btn');
export const controlVolume = videoContainer.querySelector('.player__volume');

//Functions
export function ready() {
  videoPlayer.setAttribute("max", videoPlayer.duration);
}

export function isPlaying() {
  if(videoPlayer.paused) {
    videoPlayer.play()
    controlPlay.style.background = "url(\"./assets/svg/pause.svg\") no-repeat center center";
  } else {
    videoPlayer.pause()
    controlPlay.style.background = "url(\"./assets/svg/play.svg\") no-repeat center center";
  }
}

export function toBack() {
  videoPlayer.currentTime-=5;
  controlProgress.value = videoPlayer.currentTime
}

export function progressControl() {
  videoPlayer.currentTime = controlProgress.value
}

export function toForward() {
  videoPlayer.currentTime+=5;
  controlProgress.value = videoPlayer.currentTime
}

export function isMuted() {
  if(videoPlayer.volume === 0) {
    videoPlayer.volume = controlVolume.value
    controlMute.style.background = "url(\"./assets/svg/volume.svg\") no-repeat center center";
  } else {
    videoPlayer.volume = 0;
    controlMute.style.background = "url(\"./assets/svg/mute.svg\") no-repeat center center";
  }
}
export function volumeControl() {
  videoPlayer.volume = controlVolume.value;
  if(controlMute.style.background !== "url(\"./assets/svg/volume.svg\") no-repeat center center") {
    controlMute.style.background = "url(\"./assets/svg/volume.svg\") no-repeat center center";
  }
}