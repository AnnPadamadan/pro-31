const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var plinkos = [];
var divisions = [];
var particles = [];

var fandn;

var divisionHeight = 200;


function setup(){
    
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    
    ground1 = new Ground(240, 800, 480, 20);


    //plinko1 = new Plinko(200, 200);
    for(var pl = 40; pl<= width; pl = pl+ 50){
        plinkos.push(new Plinko(pl, 75));
    }
   
   for(var pli = 15; pli<= width-10; pli = pli+ 50){
    plinkos.push(new Plinko(pli, 175));
}

for(var plink = -15; plink<= width-20; plink = plink+ 50){
    plinkos.push(new Plinko(plink, 275));
}
for(var pli = 15; pli<= width-10; pli = pli+ 50){
    plinkos.push(new Plinko(pli, 375));
}

for(var pl = 40; pl<= width; pl = pl+ 50){
    plinkos.push(new Plinko(pl, 475));
}




//plinko1 = new Plinko(200, 200);

//division1 = new Divisions(200, 200, 200, 200);

for( var d = 0; d<=width; d = d+80){
    divisions.push(new Divisions(d, height-divisionHeight/2,5,divisionHeight));
}



//division1 = new Divisions(200, 200, 200, 200);


}



function draw(){
    background(207, 207, 207);
    Engine.update(engine);


    
if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10), 10, 10));
}
//plinko1.display();
//division1.display();
for (var plin = 0; plin<plinkos.length; plin++){
plinkos[plin].display();
}

for (var di = 0; di<divisions.length; di++){
    divisions[di].display();
    }

    for (var pa = 0; pa<particles.length; pa++){
        particles[pa].display();
        }
    ground1.display()


   
}


