const polybiusModule = (function () {
function polybius(input, encode = true) {

//declare a variable for matching keys for decoding and encoding
    
const keys = ["a", 11, "f", 12, "l", 13, "q", 14, "v", 15, "b", 21, "g", 22, "m", 23, "r", 24, "w", 25, "c", 31, "h", 32, "n",
  33, "s", 34, "x", 35, "d", 41, "i/j", 42, "o", 43, "t", 44, "y", 45, "e", 51, "k", 52, "p", 53, "u", 54, "z", 55];

//check if encode is true 

if(encode === true){

/*if it is, manipulate the input string to lowercase, and then into an array including the string characters seperated into seperate elements*/
    
let lower = input.toLowerCase();
let inputArray = Array.from(lower);
    
//declare a variable to push numbers from the keys variable based on matching letters from the input.
     
const answer = [];

/*loop through the input letters and indexes, then push the element after the matching letter, which will be the appropriate code number*/
     
inputArray.forEach((input, index) => keys.forEach((code,i) =>{
   if(input !== "i" && input !== "j" && input === code){answer.push(keys[i +1])}
   return answer; })    
);

/*loop again through the input arrays and use .splice to insert spaces where they were originally in the array based on a space/' ' match;
note that the "space" match is based on single quotes/' '  since that is how the "space" is returned by the Array.from function we used ealier*/

inputArray.forEach((input, index) => {
    if(input === ' '){answer.splice(index, 0,' ')} return answer; 
});

//finally loop through the input array one more time to insert the nuber 42 for a match of either "i" or "j"

inputArray.forEach((input1, index) =>{
  if(input1 === "i" || input1 === "j"){
    answer.splice(index, 0, 42)}});

//return the answer array with join to return it as whole number
    
 return answer.join("");}


//check if encode is false    

if(encode === false){

/*declare an array and manipulate the number string from input into an array 
including all of the numbers as seperate elements using the following combination;
1)turn the numbers into a string with String. 2)remove the space with .split. 
3)Use .map to create an array of the seperated number by
employing Number inside of the callback to simutaniously seperate each charachter and change it back to a number*/


let inputArray = String(input).split("").map((input)=>{
        return Number(input);
      });     

/*loop through the input and push an "0" character in the next index after any zero, which indicates a space, so as not to throw off the conversion because of the space*/      

inputArray.forEach((array, index) =>{
    if(array === 0){
        inputArray.splice(index +1, 0, "0");
    }
});


/*check that the final input arra length is an even number to ensure there every number has a pair, otherewise return false*/

if(inputArray.length %2 !== 0){return false};

/*use reduce to split the input array elements into pairs of two, by looping through the single arrays, then checking if the 
index is an even number, then creating a new array icluding the next two arrays from the original numbers array using .slice, 
and finally returning the full array of array pairs by returning the accumulator (result) after each loop*/

  
const finalArray = inputArray.reduce((result, value, index, array) => {
      if(index % 2 === 0){
    return [...result, array.slice(index, index +2)];
        } 
        return result}, []); 
     
             
/*declare a new array and combine each of the array pairs into one character by using template literals without any spacing between the numbers*/


let finalArray1 = [];
finalArray.forEach((array, index)=>{
finalArray1.push( `${finalArray[index][0]}${finalArray[index][1]}`)}
    );

/*declare a new array and push manipulations of the strings of numbers into actual numbers using parseInt*/ 


let finalArray2 = [];
finalArray1.forEach((number) =>{ 
finalArray2.push(parseInt(number));}); 

/*declare another array and loop through the number arrays, pushing the solution letters based on the matching numbers,
by going to the index prior to the number, which is the corresponding letter*/

let answer = [];      
finalArray2.forEach((input2, index) => keys.forEach((code,i) =>{
        if(input2   === code){answer.push(keys[i-1])}
     return answer}));

/*loop through the arrays and add a space for any array which is a space, which is what we translated it into earlier (line 51, and 59)*/      
    
finalArray2.forEach((input, index) =>{
  if(input === 0){
    answer.splice(index, 0, " ")}});
    
//join the arrays of letters with .join
        
  return answer.join("");
 }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius }
