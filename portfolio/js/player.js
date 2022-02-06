//Container
export const videoContainer = document.querySelector('.video-player-container');
export const videoPlayer = document.querySelector('.viewer');

//Controls
export const controlContainer = videoContainer.querySelector('.player__controls');
export const controlPlay = videoContainer.querySelector('.player__play-btn');
export const controlProgress = videoContainer.querySelector('.player__progress');
export const controlMute = videoContainer.querySelector('.player__volume-btn');
export const controlVolume = videoContainer.querySelector('.player__volume');
export const controlPlayOnPreview = videoContainer.querySelector('.button-play');

export let currentPercent
export let currentVolume

//Functions
export function ready() {

}

export function isPlaying() {
  if (videoPlayer.paused) {
    controlPlayOnPreview.style.display = 'none'
    videoPlayer.play()
    controlPlay.style.background = "url(\"./assets/svg/pause.svg\") no-repeat center center";
    controlContainer.style.transform = 'translateY(0)'

  } else {
    controlPlayOnPreview.style.display = 'block'
    videoPlayer.pause()
    controlPlay.style.background = "url(\"./assets/svg/play.svg\") no-repeat center center";
  }
}

export function progressControl() {
  videoPlayer.currentTime = (controlProgress.value * videoPlayer.duration) / 100
}

export function progressCurrentTime() {
  currentPercent = ((videoPlayer.currentTime * 100) / videoPlayer.duration) + '%'
  controlProgress.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${currentPercent}, rgb(200, 200, 200) ${currentPercent}, rgb(200, 200, 200) 100%)`
  controlProgress.value = (videoPlayer.currentTime * 100 / videoPlayer.duration)
  if(currentPercent === '100%') {
    controlPlayOnPreview.style.display = 'block'
  }

}

setInterval(progressCurrentTime, 100)

export function isMuted() {
  if (videoPlayer.volume !== 0) {
    videoPlayer.volume = 0;
    controlMute.style.background = "url(\"./assets/svg/mute.svg\") no-repeat center center";
  } else {
    if (currentVolume === '0%') {
      console.log('Ноль', controlVolume.value)
      videoPlayer.volume = .5
      controlVolume.value = videoPlayer.volume
      currentVolume = '50%'
      controlVolume.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${currentVolume}, rgb(200, 200, 200) ${currentVolume}, rgb(200, 200, 200) 100%)`
      controlMute.style.background = "url(\"./assets/svg/volume.svg\") no-repeat center center";
    } else {
      videoPlayer.volume = controlVolume.value
      controlMute.style.background = "url(\"./assets/svg/volume.svg\") no-repeat center center";
    }
  }
}

export function updateVolumeControl() {
  videoPlayer.volume = controlVolume.value;
  currentVolume = (controlVolume.value * 100) + '%'
  controlVolume.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${currentVolume}, rgb(200, 200, 200) ${currentVolume}, rgb(200, 200, 200) 100%)`
  if (controlMute.style.background !== "url(\"./assets/svg/volume.svg\") no-repeat center center") {
    controlMute.style.background = "url(\"./assets/svg/volume.svg\") no-repeat center center";
  }
  if (currentVolume === '0%') {
    controlMute.style.background = "url(\"./assets/svg/mute.svg\") no-repeat center center";
  }
}