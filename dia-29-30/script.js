const countdown = document.getElementById('countdown')
const firework = document.getElementById('firework')
const title = document.getElementById('title')

let timeleft = 10;
let downloadTimer = setInterval(function(){
   countdown.textContent = timeleft
   timeleft--
   console.log(timeleft);
   if(timeleft <= -2){
   title.style.display = "none"
   clearInterval(downloadTimer);
   countdown.style.display = "none"
   fireworks.style.display = "block"
  }
}, 1000);
