song1 = ""
song2 = ""
lwx = 0
lwy = 0
rwx = 0
rwy = 0
scorelw = 0
scorerw = 0
song1_status = ""
song2_status = ""

function preload(){
  song1 = loadSound('Thunder.mp3');
  song2 = loadSound('GangnamStyle.mp3');
}

function setup(){
  canvas = createCanvas(600,500)
  canvas.center()
  video = createCapture(VIDEO);
  video.hide()
  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotPoses)
}

function draw(){
  image(video,0,0,600,500);
  song1.setVolume(0.5)
  song1.rate(1)
  song2 .setVolume(0.5)
  song2.rate(1)
  fill('red')
  song1_status = song1.isPlaying()
  if(scorelw > 0.2){
    circle(lwx, lwy, 20)
    song2.stop()
    if(song1_status == false){
      song1.play()
      document.getElementById('song').innerHTML = 'Song: Thunder by Imagine Dragons'
    }
  }
  if(scorerw > 0.2){
    circle(rwx, rwy, 20)
    song1.stop()
    if(song2_status == false){
      song2.play()
      document.getElementById('song').innerHTML = 'Song: Gangnam Style'
    }
  }
  
}

function modelLoaded(){
  console.log('model is loaded')
}

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    lwx = results[0].pose.leftWrist.x;
    lwy = results[0].pose.leftWrist.y;
    rwx = results[0].pose.rightWrist.x;
    rwy = results[0].pose.rightWrist.y;
    scorelw = results[0].pose.keypoints[9].score;
    scorerw = results[0].pose.keypoints[10].score;
  }
}

