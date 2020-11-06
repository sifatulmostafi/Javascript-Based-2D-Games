var board = $('#board');



function block_construction(){
	var left = 0; // left position
	var top = 0; // top position
	// looping over all the blocks in the board
	var block_starts_from = $('#board #board-elements .element_under_board').length;;
	for(var i=100; i>=1; i--){
		var element = $(".block:nth-child("+(i+block_starts_from )+")");
		// inserting text into the block
		element.text(i);
		// setting id's to the blocks
		element.attr( 'id', 'i_'+i );
		// setting proper position to the blocks
		element.css({
			'left': left+'px',
			'top' : top+'px'
		});
		// increasing left position for each block one by one
		left+=67;
		// going one row up and start positiong from the very left
		if((101-i)%15===0){
			left=0;
			top+=67;
		}
	} // end of looping
}


function vehicle_placement(){

	// placing car_01
	$('#board #board-elements #car_01').css({
		'left': $('#i_46').css('left'),
		'top' : $('#i_46').css('top')
	});

	// placing train_01
	$('#board #board-elements #train_01').css({
		'left': $('#i_39').css('left'),
		'top' : $('#i_39').css('top')
	});

	// placing train_02
	$('#board #board-elements #train_02').css({
		'left': $('#i_19').css('left'),
		'top' : $('#i_19').css('top')
	});

	// placing plane_01
	$('#board #board-elements #plane_01').css({
		'left': $('#i_86').css('left'),
		'top' : $('#i_86').css('top')
	});
}


function interval_animation(){
	// setting interval to animate ladders
	setInterval(function(){
		$(".ladder").addClass('animated flash');
	    setTimeout(function(){
	          $(".ladder").removeClass('animated flash');
	    },1000);
	},3000);

	// setting interval to animate snakes
	setInterval(function(){
		$(".snake").addClass('animated flash');
	    setTimeout(function(){
	          $(".snake").removeClass('animated flash');
	    },500);
	},700);

	// setting interval to animate block
	setInterval(function(){
		block_animation();
	},500);
}




var button_sound = document.getElementById("button-sound");
function bounceButton(button){
	// bounceIn button when click on it
	button.addClass('animated bounceIn');
    button_sound.play();
    setTimeout(function(){
        button.removeClass('animated bounceIn');
    },500);	
}



var block1=50;
var block2=90;
var block3=1;
var block4=29;
var block5=13;
var block6=41;
var block7=67;
var block8=91;
var block9=87;
var block10=17;
var block11=3;
var block12=5;
var block13=1;
var block14=13;
var block15=19;
var block16=23;
var block17=37;
var block18=39;
var block19=87;
var block20=50;

function block_animation(){
	// reseting background color for all blocks
	// for(var i=1; i<=100; i++){
	// 	$('#i_'+i).css('background-color','');
	// 	$('#i_'+i).css('color','#34495E');
	// }
	// // generating random block position and animating them
	// for(var j=0; j<=75; j++){
	// 	var random = (Math.floor((Math.random() * 99) + 1));
	// 	//$('#i_'+random).addClass('animated pulse');
	//     setTimeout(function(){
	//           //$('#i_'+random).removeClass('animated pulse');
	//     },1000); //rgba(246,71,71,0.3)
	// 	$('#i_'+random).css('background-color','rgba(26,188,156,0.3)');
	// 	$('#i_'+random).css('color','black');
	// }

	$('#i_'+block1).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block2).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block3).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block4).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block5).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block6).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block7).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block8).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block9).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block10).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block11).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block12).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block13).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block14).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block15).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block16).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block17).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block18).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block19).css({
		'background-color':'',
		'color':'#34495E'
	});
	$('#i_'+block20).css({
		'background-color':'',
		'color':'#34495E'
	});

	block1 = (Math.floor((Math.random() * 99) + 1));
	block2 = (Math.floor((Math.random() * 99) + 1));
	block3 = (Math.floor((Math.random() * 99) + 1));
	block4 = (Math.floor((Math.random() * 99) + 1));
	block5 = (Math.floor((Math.random() * 99) + 1));
	block6 = (Math.floor((Math.random() * 99) + 1));
	block7 = (Math.floor((Math.random() * 99) + 1));
	block8 = (Math.floor((Math.random() * 99) + 1));
	block9 = (Math.floor((Math.random() * 99) + 1));
	block10 = (Math.floor((Math.random() * 99) + 1));

	$('#i_'+block1).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block2).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block3).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block4).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block5).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block6).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block7).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block8).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block9).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block10).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block11).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block12).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block13).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block14).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block15).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block16).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block17).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block18).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block19).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});
	$('#i_'+block20).css({
		'background-color':'rgba(26,188,156,0.3)',
		'color':'black'
	});

}





////array_of_position_of_players[i]=1;




var degree = 360;
var dice = $('#dice');
var randomNumber;
function rotateDice (){
    // rotating dice and generating a number between 1-6 !
	randomNumber = Math.floor((Math.random() * 6) + 1);
	//$('#dice').text('');
	dice.text(randomNumber);
	dice.css({
		'opacity': 1,
		'transform':'scale(7) rotateY(' + degree + 'deg)'
	});

	// after the dice come in 1s..
	// then stay still another 1s (1+1=2)..
	// then this function will be called
	setTimeout(function(){
		dice.css({
			'opacity': 0,
			'transform':'scale(1) rotateY(-' + degree + 'deg)'
		});
	},2000);

	// after the dice ends rotating in 1s (2+1=3)
	// this function will call
	setTimeout(function(){
		player_new_position_finder(randomNumber);
	},3000);
}


function match_ends(){
	// $('#board-elements,#join-button').addClass('animated flipOutY');
	
	// determining the winner player object
	var winner = $('#player_'+playerToBeMoved);

	// assigning the winner name
	var winner_name =  winner.find('#player-name').text();
	$('#result h2 span').text(winner_name);

	// assigning the winner avatar
	var winner_avatar =  winner.find('#player-avatar img').attr('src');
	$('#result #winner-avatar img').attr({
		'src': winner_avatar
	});

	$('#join-button').addClass('animated fadeOut');
	$('#result').addClass('animated bounce');
	$('#result').animate({
		'top' : '150px'
	});
	proceed = false;
}

function player_new_position_finder(movedBy){
	block_position_of_players[playerToBeMoved]+=movedBy;
	
	// if(block_position_of_players[playerToBeMoved]===100){
	// 	player_position_handler(1000);
	// 	setTimeout(function(){
	// 		match_ends();
	// 	},1000);
	// }
	if(block_position_of_players[playerToBeMoved]>100){
		block_position_of_players[playerToBeMoved]-=movedBy;
		player_position_handler(0);
	}
	else{
		player_position_handler(1000);
	}
}


var special_position_occured = false;

function player_position_handler(speed){

	var player_object = $('#board #board-elements #player_'+playerToBeMoved);

	// the player will be taking 1s (3+1=4) to complete it's run
	change_position(player_object,block_position_of_players[playerToBeMoved],speed);


	//var message = 'player '+playerToBeMoved+' move >> current position >> '+array_of_position_of_players[playerToBeMoved]+' >> new Position >> ';
	//message=message+array_of_position_of_players[playerToBeMoved];
	//console.log(message);

}


var position_change_sound = document.getElementById("position-change-sound");
function change_position(player,newPosition,speed){

	var newPositionleft = $('#i_'+newPosition).css('left');
	var newPositiontop = $('#i_'+newPosition).css('top');
	position_change_sound.play();
	player.animate({
		'top': newPositiontop,
		'left': newPositionleft
	},speed,"swing",function(){
		if(!change_position_specialCase()){
			player_determiner();
			proceed=true;
		}
	});
}



// a function to change position in special cases
function change_position_specialCase(){

	// going up to ladder if player reach to the bottom of the ladder
	if(block_position_of_players[playerToBeMoved]==7){
		player_new_position_finder(44);
		return true;
		
	}
	else if(block_position_of_players[playerToBeMoved]==28){
		player_new_position_finder(44);
		return true;
	}
	else if(block_position_of_players[playerToBeMoved]==55){
		player_new_position_finder(29);
		return true;
	}
	else if(block_position_of_players[playerToBeMoved]==62){
		player_new_position_finder(29);
		return true;
	}
	// going down to snake tail if player reach to the mouth of the snake
	else if(block_position_of_players[playerToBeMoved]==60){
		player_new_position_finder(-45);
		return true;
	}
	else if(block_position_of_players[playerToBeMoved]==82){
		player_new_position_finder(-16);
		return true;
	}
	else if(block_position_of_players[playerToBeMoved]==89){
		player_new_position_finder(-16);
		return true;
	}
	else if(block_position_of_players[playerToBeMoved]==95){
		player_new_position_finder(-78);
		return true;
	}

	else if(block_position_of_players[playerToBeMoved]===100){
		match_ends();
		return true;
	}


	return false;
	// vehicle manipulating
	// else if(array_of_position_of_players[playerToBeMoved]==19){
	// 	var player_object = $('#board #board-elements #player_'+playerToBeMoved);
	// 	var vehicle_object = $('#board #board-elements #train_02');
	// 	vehicle_position_handler(player_object,vehicle_object,25);
	// 	array_of_position_of_players[playerToBeMoved]=25;
	// }

	// else if(array_of_position_of_players[playerToBeMoved]==39){
	// 	var player_object = $('#board #board-elements #player_'+playerToBeMoved);
	// 	var vehicle_object = $('#board #board-elements #train_01');
	// 	vehicle_position_handler(player_object,vehicle_object,34);
	// 	array_of_position_of_players[playerToBeMoved]=34;
	// }

	// else if(array_of_position_of_players[playerToBeMoved]==46){
	// 	var player_object = $('#board #board-elements #player_'+playerToBeMoved);
	// 	var vehicle_object = $('#board #board-elements #car_01');
	// 	vehicle_position_handler(player_object,vehicle_object,50);
	// 	array_of_position_of_players[playerToBeMoved]=50;
	// }

	// if(array_of_position_of_players[playerToBeMoved]==46){
	// 	var player_object = $('#board #board-elements #player_'+playerToBeMoved);
	// 	var vehicle_object = $('#board #board-elements #plane_01');
	// 	vehicle_position_handler(player_object,vehicle_object,97);
	// 	array_of_position_of_players[playerToBeMoved]=97;
	// }

} // end of function change_position_specialCase








function initialize(){
	// constructing blocks
	block_construction();

	// constructing vehicles on the board
	vehicle_placement();

	interval_animation();
}


/**** add_player_sindow ***************/
function reset_add_player_window(){
	$('#add-player-window #choose-name #player-name').val('');
	$( "input#player-name" ).focus();
	player_avatar='';
	player_name='';
}
function show_add_player_window(){
	$( "input#player-name" ).focus();
	$('#add-player-window').addClass('animated bounce');
	$('#add-player-window').animate({
		'top' : '40px'
	},150);
	
}
function hide_add_player_window(){
	$('#add-player-window').removeClass('animated bounce');
	$('#add-player-window').animate({
		'top' : '-675px'
	});
}
/****************************************/

var player_avatar = '';
var player_name = '';

function player_name_manipulation(){
	player_name = $('#add-player-window #choose-name #player-name').val();
}

function player_avatar_manipulation(selected_avatar){
	player_avatar = selected_avatar.attr('src');
}


var player_amount = 0;
var block_position_of_players = Array();
function add_player(){
	//increasing player amount
	player_amount++;
	// initial block position of the player
	block_position_of_players[player_amount]=1;
	//saving player name
	
	// creating a new player
	var new_player = $("#board #board-elements #player-model").clone();
	// changing attributes of the new player
	new_player.attr({
		'class': 'player',
		'id': 'player_'+player_amount,
		'style': 'left:'+$('#i_1').css('left')+';'+'top:'+$('#i_1').css('top')+';',
	});
	// assigning name to the player
	new_player.find('#player-name').text(player_name);
	// assigning avatar to the player
	new_player.find('#player-avatar img').attr({
		'src': player_avatar
	});
	//appending the player to the board
	new_player.appendTo("#board #board-elements");
	//console.log("player no >> "+player_amount+" >> "+player_name);
}




var playerToBeMoved = 0;
function player_determiner(){

	$('#player_'+playerToBeMoved+' #player-arrow').css(
		'opacity', 0
	);

	playerToBeMoved=(++playerToBeMoved)%player_amount;
	if(playerToBeMoved==0){
		playerToBeMoved=player_amount;
	}
	
	$('#player_'+playerToBeMoved+' #player-arrow').css(
		'opacity', 1
	);
	//console.log(playerToBeMoved);
}

//var atLeastOneMove = false;

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


function start(){
		
	$('#join-button').click(function(){
		bounceButton($(this));
		show_add_player_window();
	})

	
	$('#add-player-window #choose-avatar .image img').click(function(){
		bounceButton($(this));
		player_name_manipulation();
		player_avatar_manipulation($(this));
	});


	$('#add-player-window #add-player-button').click(function(){
		bounceButton($(this));
		if(player_avatar.length>0 && player_name.length>0 ){
			add_player();
			hide_add_player_window();
			reset_add_player_window();
			if(player_amount<=2){
				player_determiner();
			}
		}
		else{
			// reset_add_player_window();
			alert('Please Write Your Name and Choose Your avatar');
		}
	});

	$('#add-player-window #add-player-cancel-button').click(function(){
		bounceButton($(this));
		hide_add_player_window();
		reset_add_player_window();
	});

	$('#board #board-elements #rotate-dice-button').click(function(){
		//$(document).fullScreen(true);
		bounceButton($(this));
		if(player_amount==0){
			alert('Please Join To Enjoy The Game !')
		}
		else{
			if(proceed==true){
				proceed=false;
				rotateDice();	
			}
		}
		

		// setTimeout(function(){
		// 	player_determiner();
		// },4000);
		
	});

	$('#restart-button').click(function(){
		location.reload();
	});

}

var proceed = true;

function main(){
	
	initialize();

	$('#start-game-button').click(function(){
		launchIntoFullscreen(document.documentElement);
		bounceButton($(this));
		$('#start').addClass('animated flipOutX');
		start();
	});





} // end of main function


$(document).ready(main());