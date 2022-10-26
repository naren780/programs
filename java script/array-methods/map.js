var salary =[2000,2004,2006,2021];
var increment=salary.map(myfunction);
function myfunction(ele,index,array){
    return Math.floor(ele+ele/10);
}
    
console.table(increment);
// fillter

var number=[1,9,87,78,64,5];
var evennum=number.filter((ele)=>{
    return ele%2==0

})
console.log(evennum)
 