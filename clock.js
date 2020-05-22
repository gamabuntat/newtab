let timerId;

window.onload = function () {
	function setClock() {
		let date = new Date();
		let seconds = date.getSeconds();
		let minutes = date.getMinutes();
		let hours = date.getHours();
		if (seconds < 10) seconds = "0" + seconds;
		if (minutes < 10) minutes = "0" + minutes;
		if (hours < 10) hours = "0" + hours;
		let string = `${hours} : ${minutes} : ${seconds}`;
	  document.getElementById('idClock').innerHTML = string;
	}
	timerId = setInterval(setClock, 1000)
}


function stop() {
	clearTimeout(timerId);
}
