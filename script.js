window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



var _CONTENT = [ 
	"Experience Design",
	" Human-Computer Interaction ",
	" Industrial Design ",
	" Machine Ethics "
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		// _CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 700);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);




// filter

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btnz");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// ! function()
// {
// 	"use strict";
// 	var lava0, lava1;
// 	// ==== Point constructor ====
// 	var Point = function(x, y)
// 	{
// 		this.x = x;
// 		this.y = y;
// 		this.magnitude = x * x + y * y;
// 		this.computed = 0;
// 		this.force = 0;
// 	}
// 	Point.prototype.add = function(p)
// 	{
// 		return new Point(this.x + p.x, this.y + p.y);
// 	}
// 	// ==== Ball constructor ====
// 	var Ball = function(parent)
// 	{
// 		this.vel = new Point(
// 			(Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.25), (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 1)
// 		);
// 		this.pos = new Point(
// 			parent.width * 0.2 + Math.random() * parent.width * 0.6,
// 			parent.height * 0.2 + Math.random() * parent.height * 0.6
// 		);
// 		this.size = (parent.wh / 12) + Math.random() * (parent.wh / 9);
// 		this.width = parent.width;
// 		this.height = parent.height;
// 	}
// 	// ==== move balls ====
// 	Ball.prototype.move = function()
// 	{
// 		// ---- interact with pointer ----
// 		// if (pointer.active)
// 		// {
// 		// 	var dx = pointer.pos.x - this.pos.x;
// 		// 	var dy = pointer.pos.y - this.pos.y;
// 		// 	var a = Math.atan2(dy, dx);
// 		// 	var v = -Math.min(
// 		// 		10,
// 		// 		500 / Math.sqrt(dx * dx + dy * dy)
// 		// 	);
// 		// 	this.pos = this.pos.add(
// 		// 		new Point(
// 		// 			Math.cos(a) * v,
// 		// 			Math.sin(a) * v
// 		// 		)
// 		// 	);
// 		// }
// 		// // ---- bounce borders ----
// 		if (this.pos.x >= this.width - this.size)
// 		{
// 			if (this.vel.x > 0) this.vel.x = -this.vel.x;
// 			this.pos.x = this.width - this.size;
// 		}
// 		else if (this.pos.x <= this.size)
// 		{
// 			if (this.vel.x < 0) this.vel.x = -this.vel.x;
// 			this.pos.x = this.size;
// 		}
// 		if (this.pos.y >= this.height - this.size)
// 		{
// 			if (this.vel.y > 0) this.vel.y = -this.vel.y;
// 			this.pos.y = this.height - this.size;
// 		}
// 		else if (this.pos.y <= this.size)
// 		{
// 			if (this.vel.y < 0) this.vel.y = -this.vel.y;
// 			this.pos.y = this.size;
// 		}
// 		// ---- velocity ----
// 		this.pos = this.pos.add(this.vel);
// 	}
// 	// ==== lavalamp constructor ====
// 	var LavaLamp = function(width, height, numBalls, c0, c1)
// 	{
// 		this.step = 3;
// 		this.width = width;
// 		this.height = height;
// 		this.wh = Math.min(width, height);
// 		this.sx = Math.floor(this.width / this.step);
// 		this.sy = Math.floor(this.height / this.step);
// 		this.paint = false;
// 		this.metaFill = createRadialGradient(width, height, width, c0, c1);
// 		this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0];
// 		this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
// 		this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0];
// 		this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1];
// 		this.grid = [];
// 		this.balls = [];
// 		this.iter = 0;
// 		this.sign = 1;
// 		// ---- init grid ----
// 		for (var i = 0; i < (this.sx + 2) * (this.sy + 2); i++)
// 		{
// 			this.grid[i] = new Point(
// 				(i % (this.sx + 2)) * this.step, (Math.floor(i / (this.sx + 2))) * this.step
// 			)
// 		}
// 		// ---- create metaballs ----
// 		for (var i = 0; i < numBalls; i++)
// 		{
// 			this.balls[i] = new Ball(this);
// 		}
// 	}
// 	// ==== compute cell force ====
// 	LavaLamp.prototype.computeForce = function(x, y, idx)
// 	{
// 		var force;
// 		var id = idx || x + y * (this.sx + 2);
// 		if (x === 0 || y === 0 || x === this.sx || y === this.sy)
// 		{
// 			var force = 0.6 * this.sign;
// 		}
// 		else
// 		{
// 			var cell = this.grid[id];
// 			var force = 0;
// 			var i = 0,
// 				ball;
// 			while (ball = this.balls[i++])
// 			{
// 				force += ball.size * ball.size / (-2 * cell.x * ball.pos.x - 2 * cell.y * ball.pos.y + ball.pos.magnitude + cell.magnitude);
// 			}
// 			force *= this.sign
// 		}
// 		this.grid[id].force = force;
// 		return force;
// 	}
// 	// ---- compute cell ----
// 	LavaLamp.prototype.marchingSquares = function(next)
// 	{
// 		var x = next[0];
// 		var y = next[1];
// 		var pdir = next[2];
// 		var id = x + y * (this.sx + 2);
// 		if (this.grid[id].computed === this.iter) return false;
// 		var dir, mscase = 0;
// 		// ---- neighbors force ----
// 		for (var i = 0; i < 4; i++)
// 		{
// 			var idn = (x + this.ix[i + 12]) + (y + this.ix[i + 16]) * (this.sx + 2);
// 			var force = this.grid[idn].force;
// 			if ((force > 0 && this.sign < 0) || (force < 0 && this.sign > 0) || !force)
// 			{
// 				// ---- compute force if not in buffer ----
// 				force = this.computeForce(
// 					x + this.ix[i + 12],
// 					y + this.ix[i + 16],
// 					idn
// 				);
// 			}
// 			if (Math.abs(force) > 1) mscase += Math.pow(2, i);
// 		}
// 		if (mscase === 15)
// 		{
// 			// --- inside ---
// 			return [x, y - 1, false];
// 		}
// 		else
// 		{
// 			// ---- ambiguous cases ----
// 			if (mscase === 5) dir = (pdir === 2) ? 3 : 1;
// 			else if (mscase === 10) dir = (pdir === 3) ? 0 : 2;
// 			else
// 			{
// 				// ---- lookup ----
// 				dir = this.mscases[mscase];
// 				this.grid[id].computed = this.iter;
// 			}
// 			// ---- draw line ----
// 			var ix = this.step / (
// 				Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 2]) + (y + this.ply[4 * dir + 2]) * (this.sx + 2)].force) - 1) /
// 				Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 3]) + (y + this.ply[4 * dir + 3]) * (this.sx + 2)].force) - 1) + 1
// 			);
// 			ctx.lineTo(
// 				this.grid[(x + this.plx[4 * dir + 0]) + (y + this.ply[4 * dir + 0]) * (this.sx + 2)].x + this.ix[dir] * ix,
// 				this.grid[(x + this.plx[4 * dir + 1]) + (y + this.ply[4 * dir + 1]) * (this.sx + 2)].y + this.ix[dir + 4] * ix
// 			);
// 			this.paint = true;
// 			// ---- next ----
// 			return [
// 				x + this.ix[dir + 4],
// 				y + this.ix[dir + 8],
// 				dir
// 			];
// 		}
// 	}
// 	LavaLamp.prototype.renderMetaballs = function()
// 	{
// 		var i = 0,
// 			ball;
// 		while (ball = this.balls[i++]) ball.move();
// 		// ---- reset grid ----
// 		this.iter++;
// 		this.sign = -this.sign;
// 		this.paint = false;
// 		ctx.fillStyle = this.metaFill;
// 		ctx.beginPath();
// 		// ---- compute metaballs ----
// 		i = 0;
// 		ctx.shadowBlur = 12;
// 		 ctx.shadowColor = "#fbf6f3";
// 		while (ball = this.balls[i++])
// 		{
// 			// ---- first cell ----
// 			var next = [
// 				Math.round(ball.pos.x / this.step),
// 				Math.round(ball.pos.y / this.step), false
// 			];
// 			// ---- marching squares ----
// 			do {
// 				next = this.marchingSquares(next);
// 			} while (next);
// 			// ---- fill and close path ----
// 			if (this.paint)
// 			{
// 				ctx.fill();
// 				ctx.closePath();
// 				ctx.beginPath();
// 				this.paint = false;
// 			}
// 		}
// 	}
// 	// ---- gradients ----
// 	var createRadialGradient = function(w, h, r, c0, c1)
// 	{
// 		var gradient = ctx.createRadialGradient(
// 			w / 2, h / 2, 0,
// 			w / 2, h / 2, r
// 		);
// 		gradient.addColorStop(0, c0);
// 		gradient.addColorStop(0.18, c1);
// 		return gradient;
// 	}
// 	// ==== main loop ====
// 	var run = function()
// 	{
// 		requestAnimationFrame(run);
// 		ctx.clearRect(0, 0, screen.width, screen.height);
// 		lava0.renderMetaballs();
// 		lava1.renderMetaballs();
// 	}
// 	// ---- canvas ----
// 	var screen = document.getElementById("canvas"),
// 		ctx = screen.getContext("2d");
// 		screen.width = window.innerWidth*0.49;
// 		screen.height = window.innerHeight*0.39;

// 	// ---- create LavaLamps ----
// 	lava0 = new LavaLamp(screen.width, screen.height, 5, "#48b2e3", "#1919c8");
// 	lava1 = new LavaLamp(screen.width, screen.height, 4, "#9f6cc6", "#1919c8");
// 	// ---- start engine ----
// 	run();
// }();