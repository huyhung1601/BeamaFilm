str1 = "^^Hello World!! ;";
str2 = "I have $1200.50";

const removeSpecialCharacters = (str) => {
  return str.replace(/[^A-Z0-9]/gi, "");
};

const doNumber3 = (str1, str2) => {
  if (
    removeSpecialCharacters(str1).length ===
    removeSpecialCharacters(str2).length
  ) {
    return "equal";
  }
  return null;
};

console.log(doNumber3(str1, str2));

str1 = "!@#ABC#@!";
str2 = "2+3=5";

console.log(doNumber3(str1, str2));
