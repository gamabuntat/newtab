function watch(a) {

  let now = new Date();
  let start = new Date(2020, 4, 17, 13, 11, 12)
  let diff = (now - start);
  let seconds = Math.floor(diff / 1000);
  let minutes = 0;
  let hours = 0;
  let days = 0;

  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
  }

  if (minutes >= 60) {
    hours = Math.floor(minutes / 60);
    minutes = minutes - hours * 60;
  }

  if (hours >= 24) {
    days = Math.floor(hours / 24);
    hours = hours - days * 24;
  }

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  let clock = `Days = ${days} | ${hours} : ${minutes} : ${seconds}`

  if (clock != document.getElementById('idClock').innerHTML) {
    document.getElementById('idClock').innerHTML = clock;
  } 

  //console.log(string);
  let timerId = setTimeout(watch, 1000);

}

setTimeout(watch, 10);
