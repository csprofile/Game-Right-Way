'use strict'
var Block = function(settings){

    settings = $.extend({
        type:'normal'
        ,passOver:1
        ,width:'0px'
        ,height:'0px'
        ,id:'xx'
        ,avaibleLastBlocks:[]
    },settings);


    var _object = function(){
        var O = document.createElement("div");
        O.className = 'block ' + settings.type + '-' + settings.passOver;
        O.style.width = settings.width;
        O.style.height = settings.height;

        O.passOver = settings.passOver;
        O.type = settings.type;
        O.blockId = settings.id;
        O.avaibleLastBlocks = settings.avaibleLastBlocks;


        O.onPassTrigger = function(lastBlockId){
            var _thisO = this;
            var validMoviment = $.inArray(lastBlockId, settings.avaibleLastBlocks) > -1;
            var validBlock = true;

            //Game over cases
            if(((validMoviment && _thisO.type != 'disabled' && _thisO.passOver > 0) || (_thisO.type=='start' && _thisO.passOver > 0))){
                _thisO.passOver --;
                O.className = '';
                O.className = 'block ' + _thisO.type + '-' + _thisO.passOver;
            }else{
                validBlock = false;
            }
            
            return validBlock;

        }
        return O;
    }


    return _object();
}