$(document).ready(function(){
	globals.game = new Game();

	$("#play")
		.html(globals.culture.playBtn)
		.click(function(){
			$("#menu").fadeOut('fast');
			globals.game.start(2,true);
		});

	$("#tutorial")
		.html(globals.culture.tutorialBtn)
		.click(function(){
			$("#menu").fadeOut('fast');
			globals.game.start('tutorial');
			tutorial.start();
		});
	
	$("#experienceTip").html(globals.culture.experienceTip);

	$("#levelLabel").html(globals.culture.levelLabel);
	$("#scoreLabel").html(globals.culture.scoreLabel);
	$("#timerLabel").html(globals.culture.timerLabel);
});