const substitutionModule = (function () {
function substitution(input, alphabet =[], encode = true){

//declare the standard alphabet

let normal = "abcdefghijklmnopqrstuvwxyz";

//declare empty variables to insert the normal and code alphabets into once encode is placed as true or false

let alphaCode = [];
let normalAlpha =[];

//set the input string to lowercase and then turn it into an array so we can itterate through it

let inputLowercase = input.toLowerCase();
let newInput = Array.from(inputLowercase);

/*change the two alphabets into arrays with Array.from() and declare the empty variables based on whether encode is true or false*/
if(encode === false){normalAlpha = Array.from(normal), alphaCode = Array.from(alphabet)};
if(encode === true){normalAlpha = Array.from(alphabet),alphaCode = Array.from(normal)};

//push blank spaces into the two arrays to preserve spaces between the words

alphaCode.push(" ");
normalAlpha.push(" "); 

/*compare the sizes of the alphabet variables, if not 27 (26 letters plus the space character we pushed earlier is 27) 
or not present at all then return false*/

if(alphaCode.length !== 27){return false};
if(normalAlpha.length !== 27){return false};
if(! input){return false};
if(! alphabet){return false};

/*double loop through the alphabet variables to check for a double character, i.e. two matching characters
at two different indexes: return false if there are any matches*/

for (let i = 1; i < alphaCode.length; ++ i) {
            for (let j = 0; j < i; ++ j) {
                if (alphaCode[i] == alphaCode[j]) {
                    return false;
                }
}
}

for (let i = 1; i < normalAlpha.length; ++ i) {
    for (let j = 0; j < i; ++ j) {
        if (normalAlpha[i] == normalAlpha[j]) {
            return false;
        }
}
}


/*use .some() and include the index parameter to find the index-number of the code alphabet 
where each letter of the inputed string matches the same letter in the code alphabet. Push the index numbers into the compare variable*/

const compare = [];
newInput.forEach((letter) =>
alphaCode.some((alph, i) => {
    if (alph === letter){
        compare.push(i);
        return true;
    }
}));

  
//transform the index numbers in the compare variable by accessing the letters at the matching indexes in the normal alphabet array.

const codify = [];
compare.forEach((number) =>{
codify.push(normalAlpha[number]);

});

/*finally add the spaces by finding the spaces indexes in the array, add them to the codify array with .splice(index, and "added-character"),
then join the answer elements into a string with .join().*/ 

codify.forEach((code, index) =>{
  if(input[code[index]] === " "){
    codify.splice(index,  " ")}})
    return codify.join("")};

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution }
