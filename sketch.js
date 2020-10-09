var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var particle;
var turn=0;
var gameState="play";

var divisionHeight=300;
var count = 0;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
  for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  
}
 


function draw() {
  background("black");
  //score
  textSize(20)
  text("Balls: "+score,20,30);

  //score text
  /* one */textSize(30)
  text("100 ",9,600);

  /* two */textSize(30)
  text("200 ",100,600);

  /* three */textSize(30)
  text("300 ",171,600);

  /* four */textSize(30)
  text("400 ",261,600);

  /* five */textSize(30)
   text("500 ",340,600);

  /* 6 */textSize(30)
  text("600 ",420,600);

  /* 7 */textSize(30)
   text("700 ",500,600);

  /* 8 */textSize(30)
  text("800 ",580,600);

  /* 9 */textSize(30)
   text("900 ",650,600);

  /* 10 */textSize(30)
  text("1000 ",725,600);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
  if(particle != null){
    particle.display();

    if( particle.body.position.x < 9 && particle.body.position.y>=600){
      score = score+100;
      particle = null;
      if(count>=5){
        gameState = "end";
      }
    }

    

    if( particle.body.position.x < 100 && particle.body.position.y>=600){
      score = score+200;
      particle = null;
      if(count>=5){
        gameState = "end";
      }
    }

    
    if( particle.body.position.x < 170 && particle.body.position.y>=600){
      score = score+300;
      particle = null;
      if(count>=5){
        gameState = "end";
      }
    }

    
    if( particle.body.position.x < 260 && particle.body.position.y>=600){
      score = score+400;
      particle = null;
      if(count>=5){
        gameState = "end";
      }
    }

    
    if( particle.body.position.x < 340 && particle.body.position.y>=600){
      score = score+500;
      particle = null;
      if(count>=5){
        gameState = "end";
      }
    }

    
    if( particle.body.position.x < 420 && particle.body.position.y>=600){
      score = score+600;
      particle = null;
      if(count>=5){
        gameState = "end";
      }
    }

    
    if( particle.body.position.x < 500 && particle.body.position.y>=600){
      score = score+700;
      particle = null;
      if(count>=5){
        gameState = "end";
      }
    }

    
    if( particle.body.position.x < 580 && particle.body.position.y>=600){
      score = score+800;
      particle = null;
      if(count>=5){
        gameState = "end";
      }
    }

    
    if( particle.body.position.x < 650 && particle.body.position.y>=600){
      score = score+900;
      particle = null;
      if(count>=5){
        gameState = "end";
      }
    }

    
    if( particle.body.position.x < 725 && particle.body.position.y>=600){
      score = score+1000;
      particle = null;
      if(count>=5){
        gameState = "end";
      }
    }
  }

  if(gameState == "end"){
    text("GameOver",200,200);
  }
}

function mousePressed(){
  if(gameState!=="end"){
   
    particle=new Particle(mouseX,10, 10,10);
    count++;
   
  }
}