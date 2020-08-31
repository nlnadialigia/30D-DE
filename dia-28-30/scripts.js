hoursId = document.getElementById('hours')
minutesId = document.getElementById('minutes')
secondsId = document.getElementById('seconds')
digitalId = document.getElementById('digital-clock')

function clock() {
    time = new Date()
    hours = time.getHours()
    minutes = time.getMinutes()
    seconds = time.getSeconds()

    if (hours>=12) {
        analogicalHours = hours/12*360
    } else {
        analogicalHours = hours/24*360
    }

    analogicalHours += minutes/60*30
    analogicalMinutes = minutes/60*360
    analogicalSeconds = seconds/60*360

    hoursId.style.transform = "rotate("+analogicalHours+"deg)"
    minutesId.style.transform = "rotate("+analogicalMinutes+"deg)"
    secondsId.style.transform = "rotate("+analogicalSeconds+"deg)"
    
    
    if (hours<10) {
        hours=`0${hours}`
    }

    if (minutes<10) {
        minutes=`0${minutes}`
    }

    if (seconds<10) {
        seconds=`0${seconds}`
    }
    
    digitalId.innerHTML=`${hours}:${minutes}:${seconds}`
}

setInterval(clock, 1000)