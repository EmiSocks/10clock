let diameter = 10;
let radius = diameter/2;
let clocks = [];
let width = 400;
let height = 300;
let currentHour;

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
		let sqrRadius = radius*sqrt(2);
		stroke(255);
		line(this.x, this.y, this.x + sqrRadius*cos(angleSec), this.y + sqrRadius*sin(angleSec));
		let r;
		let g;
		let b;
		if (minute() < 20) {
			r = map(minute(), 0, 20, 0, 255);
			g = map(minute(), 0, 20, 255, 0);
			b = 0;
		} else if (minute() >= 20 && minute() < 40) {
			r = map(minute(), 20, 40, 255, 0);
			g = 0;
			b = map(minute(), 20, 40, 0, 255);
		} else if (minute() >= 40) {
			r = 0;
			g = map(minute(), 40, 60, 0, 255);
			b = map(minute(), 40, 60, 255, 0);
		}
		stroke(r, g, b);
		line(this.x, this.y, this.x - sqrRadius*cos(angleSec), this.y - sqrRadius*sin(angleSec));
	}
}

function setup() {
	createCanvas(width,height);
	angleMode(RADIANS);
	textAlign(CENTER, CENTER);
}

function hourChanged() {
	currentHour = hour();
	clocks = [];
	
	background(0);
	noStroke();
	fill(255);
	
	textSize(width/1.5);
	text(currentHour, width/2, height/2);
	
	for (x=0; x<width; x+=diameter) {
		for (y=0; y<height; y+=diameter) {
			if (get(x,y)[0] == 0) {
				clocks.push(new Clock(x + diameter/2, y + diameter/2, round(random())));
			}
		}
	}
	
	
}

function draw() {
	
	if (currentHour != hour()) hourChanged();
	
	background(0);
	
	let hours = hour();
	let minutes = minute();
	let seconds = second();
	
	clocks.forEach(function(clock) {
		clock.draw();
	});
	
}
