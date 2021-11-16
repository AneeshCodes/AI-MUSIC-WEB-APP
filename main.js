song1 = ""
song2 = ""

function preload(){
  song1 = loadSound('Thunder.mp3');
  song2 = loadSound('GangnamStyle.mp3');
}

function setup(){
  canvas = createCanvas(600,500)
  canvas.center()
  video = createCapture(VIDEO);
  video.hide()
}

function draw(){
  image(video,0,0,600,500);
  song1.setVolume(0.5)
  song1.rate(1)
  song2.setVolume(0.5)
  song2.rate(1)
}