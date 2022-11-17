// Add js here.
var playBotton = document.getElementById("play");
var pauseBotton = document.getElementById("pause");
var slowerBotton = document.getElementById("slower");
var fasterBotton = document.getElementById("faster");
var skipBotton = document.getElementById("skip");
var muteBotton = document.getElementById("mute");
var sliderBotton = document.getElementById("slider");

var video = document.getElementById("videoplayer");

video.onloadstart = () => {
    video.autoplay = false;
    video.loop = false;
    video.onload();
}

playBotton.addEventListener("click", () => {
    video.play();
})

pauseBotton.addEventListener("click", () => {
    video.pause();
})

slowerBotton.addEventListener("click", () => {
    if(video.playbackRate === 2) {
        video.playbackRate = 1
    } else if(video.playbackRate === 1) {
        video.playbackRate = 0.5
    } else {
        alert("Video is at slowest speed!")
    }
})

fasterBotton.addEventListener("click", () => {
    if(video.playbackRate === 0.5) {
        video.playbackRate = 1
    } else if(video.playbackRate === 1) {
        video.playbackRate = 2
    } else {
        alert("Video is at fastest speed!")
    }
})

skipBotton.addEventListener("click", () => {
    if(video.duration - video.currentTime < 15) {
        video.currentTime = 0
    } else {
        video.currentTime += 15
    }
})

muteBotton.addEventListener("click", () => {
    if(video.muted) {
        video.muted = false;
        muteBotton.innerText = "Mute"
    } else {
        video.muted = true;
        muteBotton.innerText = "Unmute"
    }
})

sliderBotton.addEventListener("change", () => {
    video.volume = sliderBotton.value / 100;
    document.getElementById("volume").innerHTML = video.volume * 100 + "%";
})