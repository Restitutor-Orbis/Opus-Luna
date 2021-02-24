var theme = pickTheme();
var rndSong = randomSong(theme);
var imagePath = "./themes/" + theme + "/image.jpg";
var songPath = "./themes/" + theme + "/songs/" + rndSong + ".mp3";

var volume = 0.1;

console.log("Volume: " + volume);

var wavesurfer = WaveSurfer.create({
    container: document.querySelector('#waveform'),
    waveColor: '#000000',
    progressColor: '#D9AF67',
    cursorColor: '#944035',
    barWidth: 3,
    cursorWidth: 0,
    height: 100,
    barGap: 1,
    mediaControls: true
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

wavesurfer.addEventListener('dblclick', () => 
    wavesurfer.pause()
);

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
