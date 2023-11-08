var video;
var prev_volume;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	let vid = document.getElementById("player1");
	document.querySelector("#volume").innerHTML = vid.volume
	vid.play()
});


document.querySelector("#skip").addEventListener("click", function () {
	console.log("Hello")
})


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	let vid = document.getElementById("player1");
	vid.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	let vid = document.getElementById("player1");
	let current_speed = vid.playbackRate;
	new_speed = current_speed * 0.9;
	vid.playbackRate = new_speed;
	console.log("New speed is:")
	console.log(new_speed)
});

document.querySelector("#faster").addEventListener("click", function() {
	let vid = document.getElementById("player1");
	let current_speed = vid.playbackRate;
	new_speed = current_speed / 0.9;
	vid.playbackRate = new_speed;
	console.log("New speed is:")
	console.log(new_speed)
});

document.querySelector("#skip").addEventListener("click", function() {
	let vid = document.getElementById("player1");
	let current_time = vid.currentTime;
	new_speed = (current_time + 10 > vid.duration) ? current_time + 10 : 0
	vid.currentTime = new_speed;
	console.log("New location is:")
	console.log(current_time)
});

document.querySelector("#mute").addEventListener("click", function() {
	let vid = document.getElementById("player1");
	let title = document.querySelector("#mute").innerHTML;
	if (title == "Mute") {
		document.querySelector("#mute").innerHTML = "Unmute";
		prev_volume = vid.volume;
		vid.volume = 0;
		document.querySelector("#volume").innerHTML = vid.volume
	}
	if (title == "Unmute") {
		document.querySelector("#mute").innerHTML = "Mute";
		vid.volume = prev_volume;
		document.querySelector("#volume").innerHTML = vid.volume
	}
})

