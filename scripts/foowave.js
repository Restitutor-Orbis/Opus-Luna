var theme = pickTheme();
var imagePath = "./themes/" + theme + "/image.jpg";
var songPath = getPath_song(theme);

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

wavesurfer.on('ready', function () {
    wavesurfer.setVolume(0.1);
    wavesurfer.play();
});


function pickTheme() {
    return "0";
}

function getPath_song(theme) {
    var random = Math.floor(Math.random() * 10) + 1;

    return "./themes/" + theme + "/songs/" + random + ".mp3";
}

