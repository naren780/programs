function display(val){
    document.getElementById('screen').value +=  val;
}
function calculate(){
    var x=document.getElementById('screen').value;
    var y=eval(x);
    document.getElementById('screen').value=y;
}