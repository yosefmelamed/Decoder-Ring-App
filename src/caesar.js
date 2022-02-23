const caesarModule = (function () {
function caesar(input, shift, encode){

//change the input to lowecase, to avoid confusion with the solutions

input = input.toLowerCase();
//change the input string into an array of the letters

let inputArray = Array.from(input);
let answer = [];

/*keep the direction of the switch or change it to backwards by multipliying the switch number by -1
depending on whether encoding or decoding*/

if(encode === true){shift = shift} else if(encode === false){shift = shift * -1}; 

//return false if there is no argument for shift, it's set at 0, more than 25, or less than 25

if(shift === 0 || shift < -25 || shift > 25){return false};

/*loop through the inputArray and translate each letter into its ACII value using charCodeAt*/

inputArray.forEach((string) =>
  {answer.push(string.charCodeAt())});  

/*loop through each ACII value and assuming it's a lowercase value use .splice to keep the value as is
and then add the shift amount to the value, assuming its a character don't change the value, and if it 
goes off the end of the alphabet, ie past 122 which is z, or before 97 which is a, then wrap around the alphabet
by combining adding the shift and the adding or subtractiing 26 (the length of the alphabet) to go back onto the alphabet*/ 

answer.forEach((value, index) => {
    if(value > 96 && value < 123 && value + shift < 123 && value + shift > 96)
     {answer.splice(index, 1, value + shift)}
    else if(value < 97 || value > 122){answer = answer}
    else if(value + shift > 122){answer.splice(index, 1, value + shift - 26)}
    else if(value + shift <= 96){answer.splice(index, 1, value + shift + 26)}
});

/*finally change the values into a completed array, convert values back to letters using String.fromCharCode,
and join the new letters into a string by looping through the letters array and adding them to an empty string 
(the solution variable)*/

let solution ="";
let values = Array.from(answer);
values.forEach((number) => {solution += String.fromCharCode(number)});
        return solution};
  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
