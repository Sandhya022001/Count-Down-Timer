let cl =console.log;



function createCountDown(){

    
let countDown= document.getElementById('countDown');

let futuretime = new Date(2023 , 0 , 25);

let currentTime = new Date();

let difference = futuretime.getTime() - currentTime.getTime(); // getTime gives time in millisecond.
cl(difference);

let days = Math.floor(difference /(1000*60*60*24)) //sec , min , hour ,day
cl(days) // it will give output in days.

let hr=Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
cl(hr) // it will give output in hr.

let min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
cl(min) // it will give output in min.

let sec = Math.floor((difference % (1000 * 60 ) / 1000));
cl(sec) // it will give output in sec.


let result =`
    <div class="counter">
  <p> Days </p>
  <p> ${setZero(days)} </p>
    </div>
    <div class="counter">
          <p> Hours </p>
          <p> ${setZero(hr)} </p>
    </div>
    <div class="counter">
          <p> Minutes </p>
          <p> ${setZero(min)} </p>
    </div>
    <div class="counter">
          <p> Seconds </p>
          <p> ${setZero(sec)} </p>
    </div>
`

countDown.innerHTML = result;

setTimeout(createCountDown, 1000);
}

createCountDown()

// function setZero(num){
//     if(num < 10){
//         return '0' + num
//     }
//     else{
//         return num
//     }
// }

function setZero(num){ return (num<10 ? '0'+num :num)}