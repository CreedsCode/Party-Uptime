var active = false;

var fxparty = new Audio('soundfxparty.mp3');
var fxapplause = new Audio('soundfxapplause.mp3');

function play_sound(wich){
    if(wich == 1){
        fxparty.play();
    } else {
        if(wich == 2){
            fxapplause.play();
        }
    }
}


function start_timer(){
    if(active){
        var timer = document.getElementById("timer").innerHTML;
        var arr = timer.split(":");
        var hour = arr[0];
        var min = arr[1];
        var sec = arr[2];

        var _hour = 0;

        if(sec == 59){
            if(min == 59){
                hour++;
                _hour++;
                play_sound(1);
                if(_hour == 5){
                    play_sound(2);
                    _hour = 0;
                }
                min = 0;
                if (hour < 10) hour = "0" + hour;
            }else{
                min++;
            }
            if(min < 10) min = "0" + min;
            sec = 0;
        } else {
            sec++;
            if(sec < 10) sec = "0" + sec;
        }

        document.getElementById("timer").innerHTML = hour + ":" + min + ":" + sec;
        setTimeout(start_timer,1000);
    }
}

function changeState(){
    if (active == false){
        active = true;
        start_timer();
        console.log("Timer Start");
        document.getElementById("control").innerHTML = "Pause";
        document.getElementById("control").className = "bbutton";
    }  else {
        active = false;
        console.log("Timer ist pause");
        document.getElementById("control").innerHTML = "Start";
        document.getElementById("control").className = "abutton";
    }
}