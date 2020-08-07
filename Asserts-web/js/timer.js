let time = 0;
let dt = new Date(new Date().setTime(0));
let seconds = Math.floor((time % ( 100 * 60)) / 1000);
let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
let new_Again = setInterval(function(){
  time++;
  if(seconds < 59)
  {
      seconds++
  }
  else
  {
      minutes++;
      seconds
  }
  let Double_sec = seconds < 10 ? ` 0${seconds}` : `${seconds}`;
  let Double_min = seconds < 10 ? ` 0${minutes}` : `${minutes}`;
  document.querySelector(".time").innerHTML = `${Double_min} : ${Double_sec}`
  console.log(time)
} ,1000)