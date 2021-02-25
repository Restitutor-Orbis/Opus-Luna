//put all background images into the same folder and create that path on line 7
//make sure all images are the same type

function pickBackground() {
    var N = 3; // number of images
    var image = randomPicker(N);
    var path = "./pics/0/" + image + ".png";

    document.getElementById("background").style.backgroundImage = "url(" + "'" + path + "'" +")";
}

function randomPicker(i) {
    return Math.floor(Math.random() * i);
}