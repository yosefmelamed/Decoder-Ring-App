const {expect} = require("chai"); 
const {caesar} = require("../src/caesar");
describe("caesar", () =>{
  it("should return false if the shift value is missing, equal to 0, less than -25, or more than 25", () =>{
    const shift =[null, 0, -26, 26];
    const actual = shift.every((shift) =>{
      return caesar("thinkful", shift)});
    const expected = false;
  expect(actual).to.be.false;
  
  });
  
  it("should ignore capital letters", ()=>{
    const input = "Altogether";
    const actual = caesar("Altogether", 2);
    const expected = caesar("altogether", 2);
    expect(actual).to.equal(expected);
  }) 
  
  it("should wrap around the alphabet if a shift goes past  'z'", ()=>{
    const actual = caesar("z", 3);
    const expected = "c";
    expect(actual).to.equal(expected);
  })
  
  it("should wrap around the alphabet if a shift goes backwards past  'a'", ()=>{
    const actual = caesar("a", -3);
    const expected = "x";
    expect(actual).to.equal(expected);
  })
  
  it("should maintain spaces and speacial characters when encoding", ()=>{
    const actual = caesar("you are great!!", 3);
    const expected = "brx duh juhdw!!";
    expect(actual).to.equal(expected);      
    })   
  
  it("should maintain spaces and speacial characters when decoding", ()=>{
    const actual = caesar("brx duh juhdw!!", 3, false);
    const expected = "you are great!!";
    expect (actual).to.equal(expected);
  })
  })
  


         
         
      
                                                                                                                                    