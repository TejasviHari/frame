

function setup(){
    var canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.position(150,150);
    video.hide();

}

function draw(){
    image(video,150,150,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(70,40,80);
    fill(0,255,0);
    stroke(0,255,0);
    rect(110,40,320,20);
    fill(255,0,0);
    stroke(255,0,0);
    circle(460,50,80);
    fill(0,255,0);
    stroke(0,255,0);
    rect(70,80,20,460);
    ////
    fill(0,255,0);
    stroke(0,255,0);
    rect(70,380,460,20);
    ////
    fill(0,255,0);
    stroke(0,255,0);
    rect(480,80,20,460);
    ///
    fill(255,0,0);
    stroke(255,0,0);
    circle(70,360,80);
    ///
    fill(255,0,0);
    stroke(255,0,0);
    circle(460,360,80);
}

function take_snapshot(){
    save('frame.png');
}