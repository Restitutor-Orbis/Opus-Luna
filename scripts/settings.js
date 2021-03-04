var selectedImage;

function initSettings() {
    var background1 = localStorage.bg1 || standardBackground1;
    var background2 = localStorage.bg2 || standardBackground2;
    var background3 = localStorage.bg3 || standardBackground3;
    var background4 = localStorage.bg4 || standardBackground4;
    var background5 = localStorage.bg5 || standardBackground5;

    document.getElementById("image1").style.backgroundImage = background1;
    document.getElementById("image2").style.backgroundImage = background2;
    document.getElementById("image3").style.backgroundImage = background3;
    document.getElementById("image4").style.backgroundImage = background4;
    document.getElementById("image5").style.backgroundImage = background5;
}

function changeImage(number) {
    selectedImage = number;
    document.getElementById('file-input').click();
}

function loadFile(event) {
    var url = URL.createObjectURL(event.target.files[0]);
    var url = "url('" + url + "')";
    var imageWrapper = getImageWrapper(url);
    var background = document.getElementById("background");

    console.log(imageWrapper);

    imageWrapper.style.backgroundImage = url;
    imageWrapper.style.backgroundSize = "cover";
    background.style.backgroundImage = url;
}

function getImageWrapper(url) {
    switch(selectedImage) {
        case 1: 
            localStorage.bg1 = url;
            return document.getElementById("image1");
            break;
        case 2: 
            localStorage.bg2 = url
            return document.getElementById("image2");
            break;
        case 3: 
            localStorage.bg3 = url
            return document.getElementById("image3");
            break;
        case 4: 
            localStorage.bg4 = url
            return document.getElementById("image4");
            break;
        case 5: 
            localStorage.bg5 = url
            return document.getElementById("image5");
            break;
    }
}