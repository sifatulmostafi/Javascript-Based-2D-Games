// variable player_one for 
var player_one;

var change_position_audio;
// initial player_block_position is 1
var player_block_position = 1;

$(document).ready(function(){
	
	// positioning all the elements of the board
	initial_positioning();

	//start audio controller function
	audio_controller();
	
	// starting animations of the blocks
	interval_animation();

	
	
	

	$("#button").click(function(){
		
		// bounceIn button when click on it
		$("#button").addClass('animated bounceIn');
	    setTimeout(function(){
	        $("#button").removeClass('animated bounceIn');
	    },500);


	    //$(this).find("audio")[0].pause();
	    document.getElementById("click").play();


	    // rotating dice and generating a number between 1-6 !
		var randomNumber = Math.floor((Math.random() * 6) + 1);

		rotateDice();
		setTimeout(function(){
			$('#dice').text(randomNumber);
		},1700);
		

		setTimeout(function(){
			// determining new position of the player
			player_block_position+=randomNumber;

			// if the new player_block_position get larger than 100 than rollback
			if(player_block_position>100){
				player_block_position-=randomNumber;
			}

			else{
				// changing the position of the player to the new position
				var newPosition = $("#i_"+player_block_position);
				change_position( newPosition );




				// if the match comes to an end
				if(player_block_position==100){

					setTimeout(function(){
						$('#i_'+100).css({
									'transition' : 'all 3s linear',
									'top':'250px',
									'left':0,
								    'right':0,
								    'margin-left':'auto',
								    'margin-right':'auto',
									'transform':'scale(5)'
								});

						setInterval(function(){
							for(var j=0; j<=25; j++){
								var random = (Math.floor((Math.random() * 99) + 1));
								$('#i_'+random).css({
									'transition' : 'all 3s linear',
									'color':'rgba(0)',
									'transform':'scale(1.8) rotateZ(1440deg)',
									'opacity':'0',
								});
							}

						},1000);
						$('.snake').addClass('animated rollOut');
						$('.ladder').addClass('animated rollOut');
						
					},3000)
					
				}

				// handling special case
				setTimeout(function(){
					change_position_specialCase(newPosition);
				},1700);	
			}

			
		},2500);



	});
});

var degree = 1440;

// a function to controll dice movements
function rotateDice (){
	$('#dice').text('');
	/*
	var str = "rotateY("+deg+") rotateX("+deg+") rotateZ("+deg+")";
	console.log(string);*/
	$('#dice').css('transform', 'rotateX(' + degree + 'deg)'+'rotateY(' + degree + 'deg)'+'rotateZ(' + degree + 'deg)');
	degree+=1440;
	/*setTimeout(function(){
	    //$('#dice').css('transform','none');
	},500);*/

}
// end of function diceController



















// a function to change position in special cases
function change_position_specialCase(newPosition){
	
	if( true
		/*newPosition.attr("id")==="i_86" ||
		newPosition.attr("id")==="i_87"*/
	){
		plain_animation_one();
		player_block_position=97;
	}

	else if(
		newPosition.attr("id")==="i_18" ||
		newPosition.attr("id")==="i_19" ||
		newPosition.attr("id")==="i_10"

	){
		train_animation_two();		
		player_block_position=25;
	}

	else if(
		newPosition.attr("id")==="i_38"
	){
		train_animation_one();		
		player_block_position=31;
	}

	else if(newPosition.attr("id")==="i_7"){
		change_position( $("#i_51") );
		player_block_position = 51;
	}

	else if(newPosition.attr("id")==="i_62"){
		change_position( $("#i_91") );
		player_block_position=91;
	}

	else if(newPosition.attr("id")==="i_28"){
		change_position( $("#i_72") );
		player_block_position = 72;
	}

	else if(newPosition.attr("id")==="i_55"){
		change_position( $("#i_84") );
		player_block_position = 84;
	}

	else if(newPosition.attr("id")==="i_60"){
		change_position( $("#i_15") );
		player_block_position = 15;
	}

	else if(newPosition.attr("id")==="i_95"){
		change_position( $("#i_17") );
		player_block_position = 17;
	}

	else if(newPosition.attr("id")==="i_89"){
		change_position( $("#i_73") );
		player_block_position = 73;
	}

	else if(newPosition.attr("id")==="i_82"){
		//player_one.delay(500);
		change_position( $("#i_66") );
		player_block_position = 66;
	}
} // end of function change_position_specialCase






























// a function to change position with vehicle
function change_position_with_vehicle(vehicle,player,destination){
	
	
	var vehicle_initial_position_left = vehicle.css('left');
	var destination_position_left = destination.css('left')


	// animating the vehicle
	vehicle.animate({
		'left': destination_position_left
		},5000,"swing",
		
		// callback function after the vehicle reached to it's destination
		function(){

			// now vehicle turns into the way of home
			vehicle.css('transform','rotateY(180deg)');
			
			// vehicle returning to its home position
			setTimeout(function(){
				vehicle.animate({
					'left': vehicle_initial_position_left
				},1000,"swing",
				
				// callback function 
				function(){
					
					// now vehicle turns into the way of it's destination
					vehicle.css('transform','rotateY(0deg)');
				});
			},2000);
		}
	); // end of animation of vehicle
	

	// animating the player
	player.animate({
		'left': destination_position_left
	},5000,"swing");
}
// end of function













// a function to change players position
function change_position(player,newPosition){
	var newPositionleft = newPosition.css('left');
	var newPositiontop = newPosition.css('top');
	//$('#travel')[0].play();
	change_position_audio.play();
	player.animate({
		'top': newPositiontop,
		'left': newPositionleft
	},1500,"swing",function(){
	});
	
} // end of function players_position













// a function to set intervals for all the animations
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

} // end of function interval_anmation();



// a function to controll sounds all over the game
function audio_controller(){
	// creating an audio element and appending it to the body
	$("<audio></audio>").attr({
	    'src':'happy.mp3',
	    'volume':1,
	    'autoplay':'autoplay'
	}).appendTo("body");
} // end of function audio_controller();


// a function to animate block in a specific time interval
function block_animation(){
	// reseting background color for all blocks
	for(var i=1; i<=100; i++){
		$('#i_'+i).css('background-color','');
		$('#i_'+i).css('color','#34495E');
	}
	// generating random block position and animating them
	for(var j=0; j<=75; j++){
		var random = (Math.floor((Math.random() * 99) + 1));
		//$('#i_'+random).addClass('animated pulse');
	    setTimeout(function(){
	          //$('#i_'+random).removeClass('animated pulse');
	    },1000); //rgba(246,71,71,0.3)
		$('#i_'+random).css('background-color','rgba(26,188,156,0.3)');
		$('#i_'+random).css('color','black');
	}
} // end of function block_animation();




// a function for initialize positioning all the elements in board
function initial_positioning(){
	
	var left = 0; // left position
	var top = 0; // top position

	// looping over all the blocks in the board
	for(var i=100; i>=1; i--){
		var element = $("#board .block:nth-child("+(i)+")");	
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
		left+=82;
		// going one row up and start positiong from the very left
		if((101-i)%15===0){
			left=0;
			top+=82;
		}
	} // end of looping

	// vanishing some blocks text
	$("#i_100").text("");
	$("#i_94").text("");
	$("#i_54").text("");
	$("#i_27").text("");
	$("#i_6").text("");

	// position of the first block will be initial position of the player	
	var primaryPosLeft = $('#i_1').css('left');
	var primaryPosTop = $('#i_1').css('top');

	// setting the initial position to the player
	player_one = $('#player-one');
	player_one.css({
		'top': primaryPosTop,
		'left': primaryPosLeft
	});

} // end of function initial_positioning()























/****************/
		/*setTimeout(function(){
			var tr = $('#train2');
			//410.771240234375px 
			if(tr.position().left<60){
				//console.log(tr.position().left);
				// setTimeout(function(){
								
				// },1000);
				tr.css({
					'transform':'rotateY(180deg)'
				});	
			}
			if(tr.position().left>330){
				//console.log(tr.position().left);
				tr.css({
					'transform':'rotateY(0deg)'
				});
			}
		},1000);*/
		/******************/