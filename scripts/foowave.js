var theme = pickTheme();
var rndSong = randomSong(theme);
var imagePath = "./themes/" + theme + "/image.jpg";
var songPath = "./themes/" + theme + "/songs/" + rndSong + ".mp3";

var volume = 0.1;

console.log("Volume: " + volume);

var wavesurfer = WaveSurfer.create({
    container: document.querySelector('#waveform'),
    waveColor: '#2F2F25',
    progressColor: '#D9AF67',
    cursorColor: '#944035',
    barWidth: 3,
    cursorWidth: 0,
    height: 100,
    barGap: 1
});

wavesurfer.load(songPath);
wavesurfer.setVolume(0.1);

playAudio(wavesurfer);

wavesurfer.on('finish', function () {
    rndSong = randomSong(theme);
    songPath = "./themes/" + theme + "/songs/" + rndSong + ".mp3";
    wavesurfer.load(songPath);
    playAudio(wavesurfer);
});

wavesurfer.on('dblclick', function () {
    wavesurfer.pause();
    console.log("debug");
});

function pickTheme() {
    return "0";
}

function randomSong(theme) {
    return random = Math.floor(Math.random() * 10) + 1;
}

function updateDisplay(theme, song, ) {

}

function playAudio(waveSurfer) {
    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });
}
