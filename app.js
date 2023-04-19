window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    var coinx = 540; //adjust for size of coin
	var coiny = Math.random() * (280-50); //var for canvas sizes
    
    var t = Date.now();
    let speed = 300;
    let dir = 0;
    let score = 10;
    
//make wasd and arrow keys work
    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    up.onmousedown = function() { dir = 4;}
    down.onmousedown = function() { dir = 3;}
    left.onmousedown = function() { dir = 2;}
    right.onmousedown = function() { dir = 1;}

    up.ontouchstart = function() { dir = 4;}
    down.ontouchstart = function() { dir = 3;}
    left.ontouchstart = function() { dir = 2;}
    right.ontouchstart = function() { dir = 1;}

    up.onmouseup = function() { dir = 0;}
    down.onmouseup = function() { dir = 0;}
    left.onmouseup = function() { dir = 0;}
    right.onmouseup = function() { dir = 0;}

    up.ontouchend = function() { dir = 0;}
    down.ontouchend = function() { dir = 0;}
    left.ontouchend = function() { dir = 0;}
    right.ontouchend = function() { dir = 0;}

    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();

        context.clearRect(0, 0, 948, 473); //make canvas a var
        
        context.font = '25px Arial';
        context.fillStyle = 'black';
        context.fillText("Health: " + score, 20, 30); //change to health

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle="red";
        context.fill();

        context.beginPath();
        context.rect(coinx, coiny, 50, 50);   //make into bll or bullet or something
        context.fillStyle="#e3c228";
        context.fill(); 

    
        if(coinx >= 0) {
            speed == 50 * timePassed;
            coinx -= speed*timePassed;
          } 
       

        if(coinx <= 0) {
            score--;
            coinx = 540;
            coiny = Math.random() * (280-50);
        }

        if(dir == 1) { 
            if(x+100 < 640) {
                x += (speed * timePassed);
            }
        }
        else if(dir == 2) { 
            if(x > 0) {
                x -= (speed * timePassed);
            }
        }
        else if(dir == 3) { 
            if(y+100 < 280) {
                y += (speed * timePassed);
            }
        }
        else if(dir == 4) { 
            if(y > 0) {
                y -= (speed * timePassed);
            }
        }
       
        if (coinx <= x+100 && x <= coinx+50 && coiny <= y+100 && y <= coiny+50) {
            coinx = 540;
            coiny = Math.random() * (280-50);
        }
        if (score <= 0) {

        context.clearRect(0, 0, 948, 473); //make canvas a var
        
        context.font = '25px Arial';
        context.fillStyle = 'black';
        context.fillText("Game Over: " + score, 20, 30); 
        }

          
        console.log(coinx);
        
        window.requestAnimationFrame(draw);
    }
   
    draw();
}

    
