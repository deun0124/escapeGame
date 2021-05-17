// dom선언부 
const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext('2d');

var radius = 10;
//var x = Math.random()*(canvas.width-1);
var x = canvas.width;
var y = 10;
var speed = 5;
var status = 1;
var count = 20;

var balls=[];
for(var i=0; i<count; i++){
    balls[i]={status :1};
}



function drawBall() {

    for(let i=0; i<count; i++){
    
        ctx.fillStyle = "#fdd700";
        ctx.beginPath();
       // ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillRect(balls[i].x, balls[i].y, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    
    }
//     if(status == 1){
   
// }

}



function makeBalls(){
    for(let i=0; i<count; i++){
        if(balls[i].status ==1){
            balls[i].status = 0;
            balls[i].x = Math.random()*(canvas.width-1);
            balls[i].y =10;
            ctx.beginPath();
            ctx.rect( balls[i].x, balls[i].y,radius, radius);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}

var heroWidth =45;
var heroHeight =50;

function drawHero(){
    var heroX = (canvas.width-heroWidth)/2
    var heroY = canvas.height-(heroHeight)*2
    ctx.beginPath();
    ctx.rect(heroX,heroY,heroWidth,heroHeight)
    ctx.fillStyle="#fdd700"
    ctx.fill();
    ctx.closePath();
}

function escapeBall(){
  if(y>canvas.height){
     
  }
}


function draw(){
   ctx.clearRect(0,0,canvas.width,canvas.height)
//    x+=speed;
    y+=speed;


    if(status==1){
        
        drawBall()
        makeBalls()
        if(y>canvas.height){
            status = 0
            
         }
    }
 
    console.log(status)
    drawHero()
    escapeBall()
    makeBalls()
    requestAnimationFrame(draw)
}

draw()


