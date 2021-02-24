var theme = pickTheme();
var rndSong = randomSong(theme);
var imagePath = "./themes/" + theme + "/image.jpg";
var songPath = "./themes/" + theme + "/songs/" + rndSong + ".mp3";

var volume = 0.1;

updateDisplay(theme, rndSong);

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

wavesurfer.on('finish', function () {
    rndSong = randomSong(theme);
    songPath = "./themes/" + theme + "/songs/" + rndSong + ".mp3";
    wavesurfer.load(songPath);
    playAudio(wavesurfer);
    updateDisplay(theme, rndSong);
});

wavesurfer.on('dblclick', function () {
    wavesurfer.playPause()
});

playAudio(wavesurfer);


function pickTheme() {
    return "0";
}

function randomSong(theme) {
    return random = Math.floor(Math.random() * 10) + 1;
}

function playAudio(waveSurfer) {
    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });
}

function updateDisplay(theme, song) {
    if(theme == 0) {
        document.getElementById("subtitle").innerHTML = "Redneck Vikings From Hell - Æther Realm";
        switch(song) {
            case 1:
                document.getElementById("title").innerHTML = "Redneck Vikings From Hell";
                break;
            case 2:
                document.getElementById("title").innerHTML = "Goodbye";
                break;
            case 3:
                document.getElementById("title").innerHTML = "Lean Into the Wind";
                break;
            case 4:
                document.getElementById("title").innerHTML = "Hunger";
                break;
            case 5:
                document.getElementById("title").innerHTML = "Guardian";
                break;
            case 6:
                document.getElementById("title").innerHTML = "One Hollow Word";
                break;
            case 7:
                document.getElementById("title").innerHTML = "She's Back";
                break;
            case 8:
                document.getElementById("title").innerHTML = "Slave to the Riff";
                break;
            case 9:
                document.getElementById("title").innerHTML = "Cycle";
                break;
            case 10:
                document.getElementById("title").innerHTML = "TMHC";
                break;
            case 11:
                document.getElementById("title").innerHTML = "Craft and the Creator";
                break;
        }
    }
}