function shout(string) {
	document.write(string.toUpperCase());
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
	if (string === "I love you, Grandma.") {
		return "I love you, too.";
	} else if (string.toLowerCase() === string) {
		return "I can't hear you!";
	} else if (string.toUpperCase() === string) {
		return "YES INDEED!";
	}
}

var str = 'hello';
var str2 = 'HELLO';
//shout(str);
//whisper(str);
//logWhisper(str);
//logShout(str);

console.log(sayHiToGrandma(str));
console.log(sayHiToGrandma(str2));
console.log(sayHiToGrandma('I love you, Grandma.'));

