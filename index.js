function shout(string) {
  return string.toUpperCase();
}

whisper = (string) => {
  return string.toLowerCase();
}

logWhisper = (string) => {
  console.log(string.toLowerCase());
}

sayHiToGrandma = (string) => {
  let lowercase = string.toLowerCase();
  let uppercase = string.toUpperCase();
  
  if (string.toLowerCase() === lowercase) {
    return "I can't hear you!";
  } else if (string.toUpperCase === uppercase) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too";
  }
}