// dom선언부 
const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext('2d');

var radius = 10;
var x = Math.random()*(canvas.width-1);
var y = 10;
var speed = 5;
var status = true;
function drawBall() {
    if(status == true){
    ctx.fillStyle = "#fdd700";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    console.log(x)
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

// 똥 피했는지... 판단..? 해야해~~
setInterval(function(){
    const ballArray = Object.entries() 
})


function draw(){
   ctx.clearRect(0,0,canvas.width,canvas.height)
//    x+=speed;
    y+=speed;
    if(status==true){
        drawBall()
        if(y>canvas.height){
            status = false
            console.log(status)
         }
    }
 
   drawHero()


    requestAnimationFrame(draw)
}

draw()


