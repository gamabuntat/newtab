function watch(a) {

  let now = new Date();
  let start = new Date(2020, 4, 17, 13)
  let diff = new Date(now - start);
  let hours = diff.getHours();
  if (hours < 10) hours = "0" + hours;
  let minutes = diff.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  let seconds = diff.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;
  let clock = `${hours} : ${minutes} : ${seconds}`

  if (clock != document.getElementById('idClock').innerHTML) {
    document.getElementById('idClock').innerHTML = clock;
  } 

  //console.log(string);
  let timerId = setTimeout(watch, 1000);

}

setTimeout(watch, 10);
