const {expect} = require("chai"); 
const {polybius} = require("../src/polybius");

describe("polybius", ()=>{
  it("should return 42 for both the letters  'i'  and  'j'", ()=>{
     const actual = polybius("ij");
     const expected = "4242";
     expect(actual).to.equal(expected)
     
  })
  
  it("should return 'i/j' when decoding the number 42", ()=>{
    const actual = polybius("42", false);
    const expected = "i/j";
    expect(actual).to.equal(expected);
  })
  it("should ignore capital letters", ()=>{
    const actual = polybius("Hello");
    const expected = polybius("hello");
    expect(actual).to.equal(expected);
  })
  
  it("should maintain spaces when encoding", ()=>{
    const actual = polybius("hello there to you");
    const expected = "3251131343 4432512451 4443 454354";
    expect(actual).to.equal(expected);
  })
  
  it("should maintain spaces when decoding", ()=>{
    const actual = polybius("3251131343 4432512451 4443 454354", false)
    const expected = "hello there to you";
    expect(actual).to.equal(expected);
  })
})