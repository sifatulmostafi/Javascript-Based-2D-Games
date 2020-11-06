//************ sound manipulation ********************/
var jump_sound = document.getElementById("jump-sound");
jump_sound.volume = 1;
var failure_sound = document.getElementById("failure-sound");
failure_sound.volume = 1;
/*******************************************************/




/*******************************************************************/
var mario = $(".window .window-elements #mario");
var marioIsJumpingImage = mario.find('.mario-stack-images img:nth-child(1)');
var marioIsRunningImage = mario.find('.mario-stack-images img:nth-child(2)');
var ground = $(".window .window-elements #ground");
var obstacle = $('.window .window-elements .obstacle');
var obstacleStackImage = $('.obstacle .obstacle-stack-images');
var background = $('.window .window-elements .background');
var message_board = $('.message-board');
var mario_status_dead = message_board.find('.mario-status img:nth-child(1)');
var mario_status_alive = message_board.find('.mario-status img:nth-child(2)');
var loading_panel = $('.loading');
var score_span = $('.score-board .score-baord-elements .score span');
var level_span = $('.score-board .score-baord-elements .level span');
var life_span = $('.score-board .score-baord-elements .life span');
/*********************************************************************/




/*******************************/
function change_background(){
	background.attr({
		'src' : "images/background/background_"+level+".jpg"
	});
}
function change_imageSet(){
	obstacleStackImage.find('img').detach();
	for(var i=1; i<=numberOfObstaclesPerLevel[level]; i++){
		$('<img/>',{
			'src' : 'images/level_'+level+'/image_'+i+'.gif'
		}).appendTo(obstacleStackImage);
	}
}
/********************************/




/**************************************************/
var jump_state = true;
var run_or_jump_check_interval;
function run_or_jump_check (){
	if(collision(mario, ground)){
		marioIsJumpingImage.css({
			'opacity': 0
		});
		marioIsRunningImage.css({
			'opacity': 1
		});
		jump_state=true;
		clearTimeout(run_or_jump_check_interval);
	}
}
/**************************************************/





/************************************/
function show_message_board(){
	message_board.fadeIn(1000);
}
function hide_message_board(){
	message_board.fadeOut(1000);
}
function show_loading_panel(){
	loading_panel.fadeIn(0);
}
function hide_loading_panel(){
	loading_panel.fadeOut(1000);
}
function show_score_baord(){
	$('.score-board .score-baord-elements').fadeIn(1000);
}
/************************************/




/****************************************/
var arrayOfHeight = [
	[],
	["","95px"],
	["","80px","80px","95px","80px"],
	["","90px"],
	["","90px","90px","95px","90px"]
];
var arrayOfWidth = [
	[],
	["","135px"],
	["","200px","200px","175px","150px"],
	["","90px"],
	["","200px","125px","150px","150px"]
];
/****************************************/


// var obstacleImage = document.getElementById("obstacleImage");

/************************************************/
var numberOfObstaclesPerLevel = [0,1,4,1,4];
var intervalDelay = 2200;
function obstacle_animation(){
	reset_obstacle_position();
	reset_obstacle_image();
	change_obstacle_position();
}
function reset_obstacle_position(){
	obstacle.css({
		'transition-duration':'0s',
		'transition-timing-function': 'linear',
		'transform': 'translate3d(0px,0px,0px)'
	});
}
function reset_obstacle_image(){
	var randomImage = Math.floor((Math.random() * numberOfObstaclesPerLevel[level] ) + 1);
	obstacle.find('img').css({
		'opacity' : 0
	});
	obstacle.find('img:nth-child('+randomImage+')').css({
		'opacity' : 1
	});
	obstacle.css({
		'width': arrayOfWidth[level][randomImage],
		'height': arrayOfHeight[level][randomImage]
	});
	
	// obstacleImage.onerror = function () { 
	//     this.style.display = "none";
	// }
}
function change_obstacle_position(){
	obstacle.css({
		'transition-duration': (intervalDelay/1000)+'s',
		'transition-timing-function': 'linear',
		'transform': 'translate3d(-'+($(window).width()+$('.obstacle').width())+'px,0px,0px)'
	});
	
	setTimeout(function(){
		start_obstacle_collision_check();
	},intervalDelay*.45);
	
	// we are determining after the obstacle checking done,
	setTimeout(function(){
		// if there's no collision then.. 
		if(touchedValue==0){
			increase_score();
		}
		else{
			touchedValue = 0;
		}
		stop_obstacle_collision_check();
	},intervalDelay*.65);

}
/*************************************************/




/**********************************************/
function mario_status_image_controller(alive){
	if(alive){
		mario_status_dead.css({
			'opacity': 0
		});
		mario_status_alive.css({
			'opacity': 1
		});
	}
	else{
		mario_status_dead.css({
			'opacity': 1
		});
		mario_status_alive.css({
			'opacity': 0
		});	
	}
}
/**********************************************/



/********************************/
function message_board_element_controller(){
	if(life==0){
		mario_status_image_controller(false);
		message_board.children('.text').text("Oops ! You Let Mario Die :(");
		message_board.children('.button').text("RESTART GAME");
	}
	else if(level==total_level){
		mario_status_image_controller(true);
		message_board.children('.text').text("All Level Has been completed !");
		message_board.children('.button').text("RESTART GAME");
	}
	else{
		mario_status_image_controller(true);
		message_board.children('.text').text("Level "+level+" has been completed !");
		message_board.children('.button').text("NEXT LEVEL");
	}
}
/*********************************/




/************************************/
var level = 0;
var total_level = 4;
function increase_level(){
	level++;
	if(level==total_level){
		restartGame = true;
	}
	level_span.text(level);
}
/************************************/


var requiredScoreToCompleteLevel = [0,150,400,500,600];



/*************************************/
var score = 0;
function increase_score(){
	score+=10;
	score_span.text(score);
	if(score%requiredScoreToCompleteLevel[level]==0){
		stop_obstacle_animation();
		message_board_element_controller();
		show_message_board();
	}
}
/*************************************/


var restartGame = false;
/************************************/
var life = 3;
function dicrease_life(){
	life--;
	life_span.text(life);
	if(life==0){
		stop_obstacle_animation();
		message_board_element_controller();
		show_message_board();
		restartGame = true;
	}
}
/************************************/




/***************************/
function reset_score_board(){
	level=0;
	level_span.text(1);
	score = 0;
	score_span.text(score);
	life = 3;
	life_span.text(life);
}
/****************************/



function mario_collision_effect(){
	mario.addClass('animated flash');
	setTimeout(function(){
		mario.removeClass('animated flash');
	},1500);
}



/********************** collision with obstacle **********************/
var touchedValue=0;
var obstacle_collision_check_interval;
function start_obstacle_collision_check(){
	obstacle_collision_check_interval = setInterval(function(){
		// if collide with obstacless
		if(collision(mario,obstacle)){
			failure_sound.play();
			mario_collision_effect();
			touchedValue = 1;
			stop_obstacle_collision_check();
			// code
			// $('.mario-life img:nth-child('+$('.mario-life img').length+')').remove();
			//$('#life_'+life).fadeOut(1000);
			dicrease_life();
		}
	},100);
}
function stop_obstacle_collision_check(){
	clearInterval(obstacle_collision_check_interval);
}
/*******************************************************************/




/*****************************************************/
var obstacle_animation_interval;
function start_obstacle_animation(){
	obstacle_animation_interval = setInterval(obstacle_animation,intervalDelay+100);
}
function stop_obstacle_animation(){
	clearInterval(obstacle_animation_interval);
}
/******************************************************/



var fogColorPerLevel = ["white","white","lightgreen","red","orange"];


/****************************************/
function launchIntoFullscreen(element) {
	if(element.requestFullscreen) {
		element.requestFullscreen();
	} else if(element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if(element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if(element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}
/***************************************/




/*********************************/
function start_level(){
	stop_obstacle_animation();
	increase_level();
	change_background();
	change_imageSet();
	start_canvas_animation(fogColorPerLevel[level]);
}
/**********************************/





/******************************************************/
function main(){

	show_loading_panel();
	setTimeout(function(){
		hide_loading_panel();
		show_message_board();
	},20000);

	$('.button').click(function(){
		jump_sound.play();
		launchIntoFullscreen(document.documentElement);
		hide_message_board();
		show_loading_panel();
		if(restartGame){
			reset_score_board();
			restartGame = false;
		}
		start_level();
		setTimeout(function(){
			show_score_baord();
			hide_loading_panel();
			setTimeout(start_obstacle_animation,5000);
		},40000);
	});


	// ***********if spacebar is pressed**************
	$(document).keydown(function(event){
	   if(event.keyCode == "32"){
	    	/*****************code***************/
	    	mario.css({
				'transition-duration':'.4s',
				'transform': 'translate3d(0px,-175px,0px)'
			});
			ground.css({
				'transition-duration':'.4s',
				'transform': 'scale(.6)'
			});
	    	if(jump_state){
	    		jump_state=false;
	    		jump_sound.play();
	    		marioIsJumpingImage.css({
					'opacity': 1
				});
				marioIsRunningImage.css({
					'opacity': 0
				});
				run_or_jump_check_interval = setInterval(run_or_jump_check,100);
	    	}
	    	/************************************/
	    }
	});
	// **************is spacebar not pressed*************
	$(document).keyup(function(event){
	    if(event.keyCode == "32"){
	    	/*****************code***************/
	    	mario.css({
				'transition-duration':'.5s',
				'transform': 'translate3d(0px,0px,0px)'
			});
			ground.css({
				'transition-duration':'.5s',
				'transform': 'scale(1)'
			});
			/************************************/
	    }
	});
}
/******************************************************************/






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



/**************************/
$(document).ready(main());