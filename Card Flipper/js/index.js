/********** manipulation of audio*********/
var click_sound = document.getElementById("click-sound");
click_sound.volume = 1;
var failure_move_sound = document.getElementById("failure-move-sound");
failure_move_sound.volume = 0.2;
var success_move_sound = document.getElementById("success-move-sound");
success_move_sound.volume = 0.2;
/****************************************/


/***********************************************/
var level;
var total_score;
var wrong_move;
var second;
var remaining;
var done;
/***********************************************/


/**************************************************************/
var toBeContinued;
var loop = 0;
var image_amonut;
function random_image_setter(){
	image_amonut = [0,0,0,0,0,0];
	for(var i=1; i<=20; i++){
		toBeContinued = true;
		while(toBeContinued){
			loop++;
			var random = Math.floor((Math.random() * 5) + 1);		
			if(image_amonut[random]<4){
				image_amonut[random]++;
				$('#card_'+i+' .back img').attr({
					'src': 'images/'+image_folder+'/image_'+random+'.png'
				});
				//console.log(random);
				toBeContinued = false;
			}
		}
	}
	/******* logging some essential informations ********/
	// for(var i=1; i<=5; i++){
	// 	console.log(i+" => "+image_amonut[i]);
	// }
	// console.log('loop => '+loop);
	/****************************************************/
}
/***************************************************************/




/***************************************/
var proceed;
function proceed_permision(delay){
	setTimeout(function(){
		proceed=true;
	},delay);
}
/**************************************/

var willRestartLevel = false;
var willRestartGame = true;


/***************************************/
var time_interval;
function start_timer(){
	second=90;
	time_interval = setInterval(function(){
		$('.timer .text span').text(second);
		if(second==0){
			stop_timer();
			vanish_board();
			level_restart_message();
			willRestartLevel = true;
			show_level_indicator();
		}
		second--;
	},1000);
}
function stop_timer(){
	clearInterval(time_interval);
}
/****************************************/




/**********************************/
function vanish_board(){
	$('.card').removeClass('run-card-animation').addClass('animated bounceOutUp');
	// closing backface of the card
	closing_backface($('.card'));
	$('.card').fadeOut(1500);
}
/***********************************/


var total_level = 5;


/********************************************/
function wrong_move_increase(){
	wrong_move++;
	$('.wrong-move').text(wrong_move);
}
function decrease_score(){
	total_score--;
	$('.total-score').text(total_score);
}
function score(){
	total_score+=5;
	$('.total-score').text(total_score);
	done+=2;
	$('.done').text(done);
	remaining-=2;
	$('.remaining').text(remaining);
	
	// if all matched
	if(done==20){
		stop_timer();
		if(level==total_level){
			vanish_board();
			game_complete_message();
			willRestartGame=true;
		}
		else{
			vanish_board();
			level_complete_message();
		}
		next_level();
		show_level_indicator();
	}
}
/******************************************/





/******************************************/
function game_start_message(){
	$('.level-indicator h1').text("WELCOME TO MEMORY VILLAGE !");
	$('.level-indicator .button').text("Start game !");
}
function game_complete_message(){
	$('.level-indicator h1').text("ALL LEVEL HAS BEEN COMPLITED !!");
	$('.level-indicator .button').text("restart the game !");
}
function level_restart_message(){
	$('.level-indicator h1').text("OOPS ! TIME IS UP, YOU COULDN'T COMPLETE THE LEVEL WITHIN TIME !!");
	$('.level-indicator .button').text("restart the level !");
}
function level_complete_message(){
	$('.level-indicator h1').text("LEVEL "+level+" has been completed !");
	$('.level-indicator .button').text("start level "+(level+1)+" !");
}
/******************************************/


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


/******************************************/
var image_folder;
function image_folder_determiner(){
	image_folder = 'level_'+level;
	//console.log(image_folder);
}
/*****************************************/


/***************************************/
function level_increase(){
	level++;
}
/***************************************/



/*********************************/
function next_level(){
	level_increase();
	reset_board();
}
/********************************/




/************************************/
function reset_score(){
	// manipulating total_score
	total_score = total_score - ((done/2)*5) + wrong_move;
	$('.total-score').text(total_score);
	
	// determinig wrong_move
	wrong_move=0;
	$('.wrong-move').text(wrong_move);
}
/**************************************/



/*******************************/
function reset_board(){
	// determining image folder
	image_folder_determiner()
	// randomize image in different
	random_image_setter();
}
/*******************************/



/*********************************/
function reset_game(){
	// resetting level
	level=0;

	// ressettting total_score
	total_score=0;
	$('.total-score').text(total_score);
}
/*****************************************/



/*********************************/
var bool;
function reset_level(){

	setTimeout(function(){
		$('.card').removeClass('animated bounceOutUp').addClass('run-card-animation');
		$('.card').fadeIn(1500);
		$('.score-board').fadeIn(1500);
		$('.level-board').fadeIn(1500);
		$('.title').fadeIn(1500);
		// making all conditions true
		proceed=true;
		bool=true;
		start_timer();
	},4000);

	// determining level
	$('.level').text(level);

	// determinig wrong_move
	wrong_move=0;
	$('.wrong-move').text(wrong_move);

	// determining second
	second = 90;
	$('.timer .text span').text(second);

	// determining remaining value
	remaining=20;
	$('.remaining').text(remaining);

	// determining done value
	done=0;
	$('.done').text(done);
}
/*********************************/


/************************************/
function show_level_indicator(){
	$('.level-indicator').animate({
		'top' : '115'
	},5000);
}
function hide_level_indicator(){
	$('.level-indicator').animate({
		'top' : '-625'
	},5000);	
}
/*************************************/


function restart_game(){
	reset_game();
	level_increase();
	reset_board();
	willRestartGame = false;
}

function restart_level(){
	reset_score();
	reset_board();
	willRestartLevel = false;
}

/**************************************************************************/
var first_image_source;
var second_image_source;
var first_image;
var second_image;
function main(){

	start_canvas_animation();

	restart_game();

	$('.button').click(function(){
		launchIntoFullscreen(document.documentElement);
		click_sound.play();
		hide_level_indicator();
		if(willRestartGame){
			restart_game();
			reset_level();
		}
		else if(willRestartLevel){
			restart_level();
			reset_level();
		}
		else{
			reset_level();
		}
	});

	$('.card').click(function(){
		if(bool && proceed) {
			click_sound.play();
			proceed = false;
			first_image = $(this);
			first_image_source = $(this).find('.back img').attr('src');
			opening_backface(first_image);
			bool = false;
			proceed_permision(500);
		}
		else if(!bool && proceed){
			click_sound.play();
			proceed = false;
			second_image = $(this);
			second_image_source = $(this).find('.back img').attr('src');
			opening_backface(second_image);
			bool = true;
			
			if(first_image.attr('id')===second_image.attr('id')){
				closing_backface(first_image);
				proceed_permision(500);
			}
			else{
				if(first_image_source!==second_image_source){
					setTimeout(function(){
						failure_move_sound.play();
						closing_backface(first_image);
						closing_backface(second_image);
						wrong_move_increase();
						decrease_score();
					},500);
					proceed_permision(500);
				}
				else{
					setTimeout(function(){
						success_move_sound.play();
						score();
						first_image.removeClass('run-card-animation').addClass('animated bounceOutUp');
						second_image.removeClass('run-card-animation').addClass('animated bounceOutUp');
					},500);
					proceed_permision(500);
				}
			}
		}
	});
}
/******************************************************************************/



/*************************************/
function opening_backface(object){
	object.find('.back').css({
		'transform': 'perspective(400px) rotateY(0deg)',
		'box-shadow' : '0px 0px 50px orange'
	});
	object.find('.front').css({
		'transform': 'perspective(400px) rotateY(180deg)',
		'box-shadow' : '0px 0px 50px orange'
	});
}
/************************************/




/**************************************/
function closing_backface(object){
	object.find('.back').css({
		'transform': 'perspective(400px) rotateY(-180deg)',
		'box-shadow' : '0px 0px 50px rgba(0,0,0,.8)'
	});
	object.find('.front').css({
		'transform': 'perspective(400px) rotateY(0deg)',
		'box-shadow' : '0px 0px 50px rgba(0,0,0,.8)'
	});
}
/***************************************/


$(document).ready(main());
