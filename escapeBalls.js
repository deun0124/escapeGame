const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext('2d');


var frame =0;
var x = canvas.width/2;
var y = canvas.height;
var score =0;

var rock =[];
rock.count =10;
for(var i=0; i<rock.count; i++){
    rock[i] = {};
}


function drawRock(){
    for(var i=0; i<rock.count; i++){
        ctx.fillStyle = "red";
        ctx.fillRect(rock[i].x,rock[i].y,30 ,30);
        

    }
}

function makeRock(){
    for(var i=0; i<rock.count; i++){
        if(rock[i].status !=1){
            rock[i].status=1;
            rock[i].x = Math.random()*(canvas.width-100);
            rock[i].y = -30;
            rock[i].frame = (Math.random()*10)%5 +3;

           
        }
    }
}


var heroWidth =45;
var heroHeight =50;
var heroX = (canvas.width-heroWidth)/2
var heroY = canvas.height-(heroHeight)*2
function drawHero(){

   
    ctx.beginPath();
    ctx.rect(heroX,heroY,heroWidth,heroHeight)
    ctx.fillStyle="#fdd700"
    ctx.fill();
    ctx.closePath();
}



let downInterval;
function drawMove(){
    for (var i=0; i<rock.count; i++){
        if(rock[i].status==1){
            rock[i].y += rock[i].frame
            if(heroX > rock[i].x && heroX <rock[i].x+30 && heroY> rock[i].y && heroY< rock[i].y+30){
                
                
             
                clearInterval(interval)
                alert( `${score}점 끝`)
                 document.location.reload()
                
               
        }
        }if(rock[i].y > canvas.height-heroHeight){
                rock[i].status =0  
                score++;  
                scoreDisplay.innerText =score;
         
        }
        
        
    }
}

const gameover = document.querySelector('.gameover')
const scoreDisplay = document.querySelector('.score')

document.addEventListener("mousemove",mouseMove,false);
function mouseMove(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX >0 && relativeX <canvas.width){
        heroX = relativeX - heroWidth/2;
       
    }
}


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height) 
    makeRock();
    drawRock();
    drawHero();
}

var interval =setInterval(function(){
    
    drawMove();
     draw(); 
     frame +=1;


},10)
interval;
