let btn1 =document.querySelector('.button1');
let btn2 =document.querySelector('.button2');
let btn3 =document.querySelector('.button3');
let btn4 =document.querySelector('.button4');

let count1=0;
let count2=0;
let count3=0;
let count4=0;

btn1.onclick=function(){
   count1++;
   let result=count1;
   document.querySelector('.span1').innerHTML=result;
}
btn2.onclick=function(){
    count2++;
    let result2=count2;
    document.querySelector('.span2').innerHTML=result2;
 }
 btn3.onclick=function(){
    count3++;
    let result3=count3;
    document.querySelector('.span3').innerHTML=result3;
 }
 btn4.onclick=function(){
    count4++;
    let result4=count4;
    document.querySelector('.span4').innerHTML=result4;
 }
