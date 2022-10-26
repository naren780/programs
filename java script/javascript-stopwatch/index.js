 
const start_btn=document.getElementById("start");

const stop_btn=document.getElementById("stop");

const rest_btn=document.getElementById("reset");
// events
start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
rest_btn.addEventListener('click',reset);


let seconds=0;
let interval=null;
function timer(){
    seconds++;
    let sec=seconds%60;
    let min =Math.floor( seconds/60);
    let hrs =Math.floor(seconds/3600);
   
   document.getElementById("time").innerText=`${hrs<10?"0":" "}${hrs}:${min<10?"0":" "}${min}:${sec<10?"0":" "}${sec}`
}
// start
function start(){
    if(interval){
        return
    }
    interval=setInterval(timer,1000)
        
    
}
// stop
function stop(){
    clearInterval(interval);
    interval=null;
  
}
function reset(){
    seconds=0;
    stop();
    document.getElementById("time").innerText=`00:00:00`;
}