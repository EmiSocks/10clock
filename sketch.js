let diameter = 10;
let radius = diameter/2;
let clocks = [];
let width = 400;
let height = 400;

class Clock {
	constructor(x, y, type) {
		this.x = x;
		this.y = y;
		this.type = type;
	}
	
	draw() {		
		let angleSec = map(second(), 0, 60, 0, 2*PI);
		if (this.type == 1) {
			angleSec = angleSec + PI/2;
		}
		stroke(255);
		let sqrRadius = radius*sqrt(2);
		line(this.x, this.y, this.x + sqrRadius*cos(angleSec), this.y + sqrRadius*sin(angleSec));
		stroke(255, 0, 0);
		line(this.x, this.y, this.x - sqrRadius*cos(angleSec), this.y - sqrRadius*sin(angleSec));
	}
}

let clock;

function setup() {
	createCanvas(width,height);
	angleMode(RADIANS);
	for (i=0; i<width/diameter; i++) {
		for (j=0; j<height/diameter; j++) {
			clocks.push(new Clock(i*diameter + diameter/2, j*diameter + diameter/2, round(random())));
		}
	}
}

function draw() {
	background(0);
	
	let hours = hour();
	let minutes = minute();
	let seconds = second();
	
	clocks.forEach(function(clock) {
		clock.draw();
	});
}
