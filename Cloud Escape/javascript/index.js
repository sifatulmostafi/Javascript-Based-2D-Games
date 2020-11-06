var box = $('div.box');
var plane = box.children("img");

var cloud_1 = $('.cloud');

var deg = 10;
var planeAnimationInterval;
function startPlaneAnimation(){
	planeAnimationInterval = setInterval(animatePlane,2000);
}
function stopPlaneAnimation(){
	clearInterval(planeAnimationInterval);
}
function animatePlane(){
	plane.css({
		'transition-duration': '2s',
		'transform': 'rotateZ('+(deg)+'deg)'
	});
	deg*=-1;
}


$(document).ready(function(){

	startPlaneAnimation();
	//startCollisionCheck();

	var upKeyPressed = 0;
	var downKeyPressed = 0;
	var leftKeyPressed = 0;
	var rightKeyPressed = 0;

	// if key has been pressed
	$(document).keypress(function(event){

		//console.log("moving");
    	var position = box.position();
    	var top = position.top;
		var left = position.left;

	   	if(event.keyCode == "105"){  
	    	box.css({
	    		'transition-timing-function': 'linear',
				'transition-duration': '.7s',
				'transform': 'translate3d('+left+'px,'+(top-125)+'px,0px)'
			});
	    	upKeyPressed = 1;
	    }
	    else if(event.keyCode == "107"){
	    	box.css({
	    		'transition-timing-function': 'linear',
				'transition-duration': '.7s',
				'transform': 'translate3d('+left+'px,'+(top+125)+'px,0px)'
			});
			downKeyPressed = 1;
	    }
	    else if(event.keyCode == "106"){
	    	box.css({
	    		'transition-timing-function': 'linear',
				'transition-duration': '.7s',
				'transform': 'translate3d('+(left-150)+'px,'+top+'px,0px)'
			});
			leftKeyPressed = 1;
	    }
	    else if(event.keyCode == "108"){
	    	box.css({
	    		'transition-timing-function': 'linear',
				'transition-duration': '.7s',
				'transform': 'translate3d('+(left+150)+'px,'+top+'px,0px)'
			});
			rightKeyPressed = 1;
	    }
	});

	

	// if key has been released
	$(document).keyup(function(event){
		//console.log("stop");
    	
    	var position = box.position();
    	var top = position.top;
		var left = position.left;

	   	if(upKeyPressed==1){  
	    	box.css({
	    		'transition-timing-function': 'ease-out',
				'transition-duration': '2.75s',
				'transform': 'translate3d('+left+'px,'+(top-225)+'px,0px)'
			});
	    }
	    else if(downKeyPressed==1){
	    	box.css({
	    		'transition-timing-function': 'ease-out',
				'transition-duration': '2.75s',
				'transform': 'translate3d('+left+'px,'+(top+225)+'px,0px)'
			});
	    }
	    else if(leftKeyPressed==1){
	    	box.css({
	    		'transition-timing-function': 'ease-out',
				'transition-duration': '2.75s',
				'transform': 'translate3d('+(left-275)+'px,'+top+'px,0px)'
			});
	    }
	    else if(rightKeyPressed==1){
	    	box.css({
	    		'transition-timing-function': 'ease-out',
				'transition-duration': '2.75s',
				'transform': 'translate3d('+(left+275)+'px,'+top+'px,0px)'
			});
	    }

	    upKeyPressed = 0;
	    downKeyPressed = 0;
	    leftKeyPressed = 0;
	    rightKeyPressed = 0;

	});

});


var collisionCheckInterval;
function startCollisionCheck(){
	collisionCheckInterval = setInterval(collisionCheck,500);
}
function collisionCheck(){
	if(collision(plane, cloud_1)){
		//alert('boom !');
	}
}

/*******************************************/
function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;
  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}
/******************************************/































































var moveBox;
function startMoving(direction){
	if(direction=="top"){
		moveBox = setInterval(function(){
			var top = box.position().top;
			var left = box.position().left;
			box.css({
				'transition-duration': '.3s',
				'transform': 'translate3d('+left+'px,'+(top-100)+'px,0px)'
			});
		},50);
	}
	else if(direction=="bottom"){
		moveBox = setInterval(function(){
			var top = box.position().top;
			var left = box.position().left;
			box.css({
				'transition-duration': '.3s',
				'transform': 'translate3d('+left+'px,'+(top+100)+'px,0px)'
			});
		},50);	
	}
	else if(direction=="left"){
		moveBox = setInterval(function(){
			var top = box.position().top;
			var left = box.position().left;
			box.css({
				'transition-duration': '.3s',
				'transform': 'translate3d('+(left-100)+'px,'+top+'px,0px)'
			});
		},50);
	}
	else if(direction=="right"){
		moveBox = setInterval(function(){
			var top = box.position().top;
			var left = box.position().left;
			box.css({
				'transition-duration': '.3s',
				'transform': 'translate3d('+(left+100)+'px,'+top+'px,0px)'
			});
		},50);
	}
}
function stopMoving(){
	clearInterval(moveBox);
}