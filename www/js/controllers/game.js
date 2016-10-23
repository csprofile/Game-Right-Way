'use strict'
var Game = function(){
    var _this = this;

    this.isStarted = false;
    var gameLevel = 0;
    var panel = new MatchPanel();

    this.gameOver = function(message){
        if(_this.isStarted){
            undindEvents();
            _this.isStarted = false;
            panel.timer.stop();
            panel.backMatch();
            _this.restartLevel();
            
            sweetAlert({
                title:globals.culture.gameOverTitle
                ,text:globals.culture[message]
                ,type:"error"
                ,animation:true
            },function(){
                 panel.timer.start();
            });
        }
    };

    this.nextLevel = function(isTutorial){
        if(isTutorial){
            gameLevel++;
            _this.start(gameLevel,true);
        }else{
            var messageParams;
            var afterMessage;
            
            if(gameLevel == 1){//Level of tutorial
                messageParams = {
                    title: globals.culture.passLevelTitle
                    ,text: globals.culture.passTutorialMessage
                    ,type: "success",
                };
                afterMessage = function(){
                    panel.resetPanel();
                    gameLevel++;
                    _this.start(gameLevel,true);
                };
                
            }else if(gameLevel+1 == level.length){
                panel.timer.stop();
                messageParams = {
                    title: globals.culture.winTitle
                    ,text: globals.culture.winMessage
                    ,type: "success",
                };
                afterMessage = function(){
                    gameLevel = 2;
                    _this.start(gameLevel,true);
                };
			}else{
                panel.timer.stop();
                messageParams = {
                    title: globals.culture.passLevelTitle
                    ,text: globals.culture.passLevelMessage
                    ,type: "success",
                };
                afterMessage = function(){
                    gameLevel++;
                    _this.start(gameLevel,true);
                };
            }
            
            
            swal(messageParams,afterMessage);
        }
    }

    this.restartLevel = function(){
        _this.start(gameLevel, false);
    }

    this.start = function(levelNo, timerAutoStart){
        globals.lastTouchedBlock = null;
        gameLevel = levelNo == 'tutorial'? 0 : levelNo;
        var lvl = level[gameLevel];
        var levelBlocks = lvl.blocks;

        var board = $('#board');
        board.empty();

        var winW = $(window).width();
        var winH = $(window).height() - $('#header').height();

        var XLineBlocks = levelBlocks[0].length
        var YLineBlocks = levelBlocks.length;

        var blockWidth = Math.norm(winW / XLineBlocks);
        var blockHeight = Math.norm(winH / YLineBlocks);
        var blockSize = blockWidth < blockHeight ? blockWidth : blockHeight;

        var boardW = blockSize * XLineBlocks;
        var boardH = blockSize * YLineBlocks;

        var block;
        var blockSettings;
        var avaibleBlocks;
        var TotalPoints = 0;

        board.css({
            'width':boardW + 'px',
            'height':boardH + 'px',
            'margin-top':((winH - boardH)/2) + 'px'
        });

        for(var yy=0; yy<YLineBlocks; yy++){
            for(var xx=0; xx<XLineBlocks; xx++){
                blockSettings = levelTranslator[levelBlocks[yy][xx].toString()];

                avaibleBlocks = [
                    'block-' + (xx+1) + '-' + yy
                    ,'block-' + (xx-1) + '-' + yy
                    ,'block-' + xx + '-' + (yy+1)
                    ,'block-' + xx + '-' + (yy-1)
                ];


                block = new Block({
                    width:blockSize
                    ,height:blockSize
                    ,type:blockSettings.type
                    ,passOver:blockSettings.passOver
                    ,id:'block-' + xx + '-' + yy
                    ,avaibleLastBlocks:avaibleBlocks
                });

                board.append(block);

                TotalPoints = TotalPoints + blockSettings.passOver;
            }
        }


        panel.setCurrentTimer(lvl.timer);
        panel.setLevel(lvl.id);
        panel.setLevelPoints(TotalPoints);
        

        if(levelNo != 'tutorial'){
            setTimeout(function(){
                if(timerAutoStart){
                    panel.timer.start();
                }
                bindEvents();
                _this.isStarted = true;
            },300);  
        }
        
    };

    var undindEvents = function(){
        $('#board').unbind();
        $('.block').unbind();
    };
    
    var bindEvents = function(){
        $('#board')
            .bind('touchend touchcancel mouseup', function(e){
				e.preventDefault();
				e.stopPropagation();
				globals.game.gameOver("gameOverTouchEnd");
			}).bind('mousedown',function(e){
				eventActions(e);
				$('.block').bind('mousemove',function(e){
					eventActions(e);
				});
			});

        $('.block')
            .bind('touchmove touchstart', function(e){
				eventActions(e);
			});
		
		function eventActions(e){

		    e.preventDefault();
            e.stopPropagation();
			var origEv;
			var x;
			var y;
			
			if(e.originalEvent.touches){
				origEv = e.originalEvent.touches[0];
				x = origEv.clientX;
				y = origEv.clientY;
			}else{
				x = e.pageX;
				y = e.pageY;
			}
			
			
			
            $('.block').each(function() {
                var $this = $(this);
                var _this = $this.get()[0];


                // check if is inside boundaries
                if (!(
                    x <= $this.offset().left || x >= $this.offset().left + $this.outerWidth() ||
                    y <= $this.offset().top  || y >= $this.offset().top + $this.outerHeight()
                )) {
                    if(_this.blockId != globals.lastTouchedBlock){
                        if(!_this.onPassTrigger(globals.lastTouchedBlock)){
                            globals.game.gameOver("gameOverWrong");
                        }else{
                            globals.lastTouchedBlock = _this.blockId;
                            globals.matchPanel.setPoint();
                        }
                    }
                }
            });
		}
    }
}