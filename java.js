var string = "Women's Web";
var array = string.split("");
var time;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(time);
			}
	loopTimer = setTimeout('frameLooper()',60);

}
frameLooper();