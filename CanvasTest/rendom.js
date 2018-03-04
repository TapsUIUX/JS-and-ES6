
var drawReq = "rand";
var circleArray = [];
var numOfCircles = 20 ;
var numOfSquares = 20 ;
var numOfLines = 20 ;

function drawOnCanvas(val){
    numOfCircles = 10 ;
    numOfSquares = 10 ;
    numOfLines = 20 ;
   circleArray.splice(0,circleArray.length);
    if(val==='rand'){
        drawReq = "rand"; 
        numOfCircles = 10 ;
        numOfSquares = numOfCircles+10 ;
        numOfLines = numOfSquares+20 ;   
    }else if(val==='cir'){
        drawReq = "cir";
    }else if(val==="sqr"){
        drawReq = "sqr";
    }else if(val==="line"){
        drawReq = "line";
    }else if(val==="lntrace"){
        drawReq="lntrace";
    }else if(val==="clear"){
        circleArray.splice(0,circleArray.length);
        drawReq="";
    }
   
  
}


const canvas = document.querySelector('canvas');
// canvas.width = window.innerHeight;
// canvas.height = window.innerWidth;

canvas.width = 1000;
canvas.height =700;
var areaHt=700;
var areaWd=1000;

var cx = canvas.getContext('2d');
//we got the context of the canvas in 2d.
//let us explore the functions in it.
// cx.fillRect(x,y,w,h)// where x y from top left corner, and how big w h
// cx.fillStyle='rgba(255,0,0,0.4)'
// cx.fillRect(100,100,100,100)
// cx.fillStyle='rgba(0,255,0,0.4)'
// cx.fillRect(200,200,100,100)
// cx.fillStyle='rgba(0,0,255,0.4)'
// cx.fillRect(300,300,100,100)


// //Line
// cx.beginPath();// begin a path
// cx.moveTo(500,500); //from where, (x,y) move the beginning point
// cx.lineTo(600,100); //to where (x,y)
// cx.lineTo(700,200); //to where (x,y)
// cx.lineTo(800,100); //to where (x,y)
// cx.lineTo(900,200); //to where (x,y)
// cx.strokeStyle = "red";
// cx.stroke();//now it will draw

// //Arc

// cx.arc(600,600,30,0,Math.PI*2,true);
// cx.stroke();

// cx.beginPath();// begin a path , it will separate the line
// cx.arc(700,700,30,0,Math.PI*2,true);
// cx.strokeStyle="blue";
// cx.stroke();


//     for(var i = 0 ; i < 5; i++){
//         var x = Math.random()*window.canvas.width;
//         var y = Math.random()*window.canvas.height;
//         cx.beginPath();// begin a path , it will separate the line
//         cx.arc(x,y,30,0,Math.PI*2,true);
//         cx.strokeStyle="blue";
//         cx.stroke();
//         }



// var x = 0;
// var y = 30;
// var i = 1; var f = 1;
// setInterval(function(){

//         if(x < window.canvas.width-60){
//             x=x+60
//         }else{  
//             x= 60;
//             if(y<window.canvas.height){
//                 y=y+60
//             }else{
//                 f=f+1;
//                 x=30*f;
//                 y=30*f;
//             }

//         }


//         cx.beginPath();// begin a path , it will separate the line
//         cx.arc(x,y,30,0,Math.PI*2,true);
//         cx.strokeStyle="blue";
//         cx.stroke();


// },30)


// cx.beginPath(); // begin a path , it will separate the line
// cx.arc(200, 200, 30, 0, Math.PI * 2, true);
// cx.strokeStyle = "blue";
// cx.stroke();

// var x = 200;
// var dx = 5 ; //x velocity
// var radius = 30 ;
// var y = 200;
// var dy = 5; // y velocity

class Circle {
    constructor(x, y ,dx,dy,radius) {
        this.x = x+radius;
        this.y = y+radius;
        this.dx=dx;
        this.dy=dy;
        this.radius=radius;
        this.draw = function () {

            cx.beginPath(); // begin a path , it will separate the line
            cx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            cx.fillStyle='rgba(255,0,0,0.4)';
            cx.fill();
            cx.closePath();
        };
        this.update = function () {
            //create bounce left and right
            if (this.x  > areaWd - this.radius || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y  > areaHt - this.radius || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
  
            this.draw();
        }
    }
}




class Rectangle {
    constructor(x, y, dx, dy, wd, ht , r , g , b) {
        this.x = x+wd;
        this.y = y+ht;
        this.dx=dx;
        this.dy=dy;
        this.ht=ht;
        this.wd=wd;

        //color
        this.r = r;
        this.g = g;
        this.b = b;

        

        this.draw = function () {

            cx.fillRect(this.x,this.y,this.wd,this.ht);
            cx.fillStyle=`rgba(${this.r},${this.g},${this.b},0.4)`;
            cx.fill();

        };
        this.update = function () {
            //create bounce left and right
            if (this.x  > areaWd -this.wd/2|| this.x - this.wd/2 < 0) {
                this.dx = -this.dx;
            }
            if (this.y > areaHt-this.ht/2  || this.y - this.ht/2 < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
  
            this.draw();
        }
    }
}


class Line {
    constructor(x, y ) {
        this.x = x;
        this.y = y;

        cx.beginPath();// begin a path
        cx.moveTo(0,0); //from where, (x,y) move the beginning point
        
        this.draw = function () {

            
            cx.lineTo(this.x,this.y); //to where (x,y)
            cx.strokeStyle = "green";
            cx.stroke();//now it will draw
            cx.closePath();
        };
        this.update = function () {
            //create bounce left and right
            // if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            //     this.dx = -this.dx;
            // }
            // if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            //     this.dy = -this.dy;
            // }
            // this.x += this.dx;
            // this.y += this.dy;
  
            this.draw();
        }
    }
}



//Randomize the stuff
// var canvas.height = window.canvas.height;
// var canvas.width = window.canvas.width;
// var x = Math.random() * window.canvas.width;
// var y = Math.random() * window.canvas.height;
// var dx = (Math.random() - 0.5) * 8; //x velocity
// var dy = (Math.random() - 0.5) * 8; // y velocity
// var radius = 30;




setInterval(function(){

if(circleArray.length>40){return;}

var x = Math.random() * (areaWd - 50);
var y = Math.random() *  (areaHt - 50);
var dx = (Math.random() - 0.5) * 1; //x velocity
var dy = (Math.random() - 0.5) * 1; // y velocity

var wd = 30;
var ht = 30;

var r = Math.floor(Math.random())*255;
var g = Math.floor(Math.random())*255;
var b = Math.floor(Math.random())*255;


var r = 0;
var g = 0;
var b = 255;

var radius = 15;

if((drawReq ==="rand" || drawReq==="cir")&& circleArray.length < numOfCircles){
    circleArray.push(new Circle(x, y ,dx ,dy, radius));
    //console.log(circleArray)
    animate();
}else if((drawReq ==="rand" || drawReq==="sqr")&& circleArray.length < numOfSquares) {
    circleArray.push(new Rectangle(x, y ,dx ,dy, wd ,ht , r ,g , b));
    // console.log(circleArray)
     animate();
}

else if((drawReq ==="rand" || drawReq==="line")&& circleArray.length < numOfLines) {
    circleArray.push(new Line(x, y));
   // console.log(circleArray)
    animate();
}
else if((drawReq ==="lntrace")&& circleArray.length < 2) {

    circleArray.push(new Circle(x, y ,dx ,dy, radius));
   // console.log(circleArray)
   
animate();
 
 
   
}


},2000)

function animate() {

    requestAnimationFrame(animate);

    if(drawReq != "lntrace" ){
          cx.clearRect(0, 0, areaWd, areaHt);
    }
  

    // cx.beginPath(); // begin a path , it will separate the line
    // cx.arc(x, y, radius, 0, Math.PI * 2, true);
    // cx.strokeStyle = "blue";
    // cx.stroke();

    circleArray.forEach((el)=>{  
        el.update();
    })

    


    // //create bounce left and right
    // if(x+radius > canvas.width || x-radius < 0){
    //     dx = -dx;
    // }

    // if(y+radius > canvas.height || y-radius < 0){
    //     dy = -dy;
    // }


    // x += dx ;
    // y += dy ;



}

