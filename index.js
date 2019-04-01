function shout(string) {
	return string.toUpperCase();
}

const whisper = (string) => {
	return string.toLowerCase();
}

const logWhisper = (string) => {
	console.log(string.toLowerCase());
}

const logShout = (string) => {
	console.log(string.toUpperCase());
}

const sayHiToGrandma = (string) => {
	let lowercase = string.toLowerCase();
	let uppercase = string.toUpperCase();
	
	if (string.toLowerCase() === lowercase) {
		return "I can\'t hear you!";
	} else if (string.toUpperCase() === uppercase) {
		return "YES INDEED!";
	} else if (string === "I love you, Grandma.") {
		return "I love you, too";
	}
}

var str = 'hello';
shout(str);
whisper(str);
logWhisper(str);
logShout(str);