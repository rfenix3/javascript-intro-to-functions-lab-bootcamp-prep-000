function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
  return;
}

function logWhisper(string) {
  console.log(string.toLowerCase());
  return;
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
=======
  if (string == string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string == string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string == "I love you, Grandma.") {
    return ""
>>>>>>> 67edde778e8076d9e06a414b7ded8d9f922156d2
  }
}

