'use strict'
var MatchPanel = function(){
    globals.matchPanel = this;

    var gamePoints = 0;
    var timerId;
    var currentTimer;
    var savedPoints = new Array();
    var totalPoints = 0;
    var matchPoints = 0;

    this.setPoint = function(points){
        if(points != null){
            document.getElementById('scorePH').innerHTML = points;
        }else{
            if(totalPoints == matchPoints+1){
                globals.game.isStarted = false;
                saveMatch();
                globals.game.nextLevel();
                matchPoints = 0;
            }else{
                gamePoints ++;
                matchPoints ++;
                document.getElementById('scorePH').innerHTML = gamePoints;
            }
        }
    }

    this.timer = {
        start : function(){
            if(currentTimer){
                setTimer(currentTimer);
                currentTimer --;

                timerId = setInterval(function(){
                    if(currentTimer >= 0){
                        setTimer(currentTimer);
                        currentTimer --;
                    }else{
                        globals.game.gameOver('gameOverTimeOver');
                    }
                },1000);
            }else{
                setTimer(0);
            }
        }
        ,stop : function(){
            clearInterval(timerId);
        }
    }

    this.setLevel = function(level){
        document.getElementById('levelPH').innerHTML = level;
    };

    this.setLevelPoints = function(total){
        totalPoints = total;
    };

    this.backMatch = function(){
        gamePoints = 0;
        matchPoints = 0;
        if(savedPoints.length>0){
            gamePoints = savedPoints[savedPoints.length - 1];
        }
        this.setPoint(gamePoints);
    };

    this.setCurrentTimer = function(timer){
        currentTimer = timer;
    }
    
    this.resetPanel = function(){
        gamePoints = 0;
        matchPoints = 0;
        this.setPoint(gamePoints);
    }

    var saveMatch = function(){
        savedPoints.push(gamePoints);
    };

    var setTimer = function(timer){
        var strTimer = timer == null ? '--:--' : SecondToMMSS(timer);
        document.getElementById('timerPH').innerHTML = strTimer;
    };

}