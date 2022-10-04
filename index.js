const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((title) => { // .map() returns new array of tutorials
    const letters = title.split(" "); // splits strings
    const capitalizedLetters = letters.map( // returns new array of split letters in tutorials
      (letter) => letter.charAt(0).toUpperCase() + letter.slice(1) // .charAt(index) returns a new string; upper cased; String.prototype.slice(start index to the end of string)
    );
    const response = capitalizedLetters.join(" "); //Array.prototype.join() creates and returns a new string by concatenating all of the elements in an array
    return response;
  });
};