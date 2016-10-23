Math.norm = Math.norm ||(function(){
    return function(num) {
        var round = Math.round(num);
        var floor = Math.floor(num);
        if(round > floor) 
            return round - 0.5;

        return floor;
    }
})()

function SecondToMMSS(Seconds){
    var sec_num = parseInt(Seconds, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
}