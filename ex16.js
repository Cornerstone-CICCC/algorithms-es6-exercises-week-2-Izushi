/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (inputString, caze) {
  let formattedString = "";
  // if (Array.isArray(caze)) {
  //   caze.forEach(caseType => {
  //     inputString = makeCaze(inputString, caseType);
  //   });
  //   // return inputString;
  // }

  switch (caze) {
    case "camel":
      formattedString = inputString.split(" ").map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }).join("");
      break;
    case "pascal":
      formattedString = inputString.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }).join("");
      break;
    case "upper":
      formattedString = inputString.toUpperCase();
      break;
    case "snake":
      formattedString = inputString.split(" ").join("_").toLowerCase();
      break;
    case "kebab":
      formattedString = inputString.split(" ").join("-").toLowerCase();
      break;
    case "title":
      formattedString = inputString.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }).join(" ");
      break;
    case "vowel":
      formattedString = inputString.split("").map(char => {
        if (char.match(/[aeiou]/)) {
          return char.toUpperCase();
        }
        return char;
      }).join("");
      break;
    case "consonant":
      formattedString = inputString.split("").map(char => {
        if (char.match(/[^aeiou]/)) {
          return char.toUpperCase();
        }
        return char;
      }).join("");
      break;
    default:
      console.log("Unknown format");
  }

  return formattedString;
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
