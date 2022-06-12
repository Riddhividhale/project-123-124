song=""
song2=""


function preload() {
    song=loadSound("music.mp3");
    song2=loadSound("AURORA-Runway.mp3")
}


function setup() {
    Canvas= createCanvas(600,500)
    Canvas.center()


    video= createCapture(VIDEO);
    video.hide();
}


function draw() {
    image(video,0,0,600,500);
}

function play(){
    song.play();
}