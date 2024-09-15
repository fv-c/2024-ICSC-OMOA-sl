setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let d = time.getDate();

    let listaMesi = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
    let m = listaMesi[time.getMonth()];

    let y = time.getFullYear();
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + " | " + d + " " + m + " " + y;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();