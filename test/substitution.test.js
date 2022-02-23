const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("substitution", ()=>{
  it("should return false if the inputed alphabet is not exactly 26 letters", ()=>{
    const actual = substitution("hello", "acdfghjklumz");
    expect(actual).to.be.false;
  });
  
  it(" should correctly translate the inputed phrase based on the inputed alphabet", ()=>{
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  
  it("should return false if there are any duplicate letters in the inputed alphabet", ()=>{
    const actual = substitution("hi there", "xxyqmcgrukswaflnthdjpzibev");
    expect(actual).to.be.false;
  });
  
  it("should maintain spaces when encoding", ()=>{
    const actual = substitution("hi there", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "ru jrmhm";
    expect(actual).to.equal(expected);
    });
  
  it("should maintain spaces when decoding", ()=>{
    const actual = substitution("ru jrmhm", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "hi there";
    expect(actual).to.equal(expected);
  });
  
  it("should ignore capital letters", ()=>{
    const actual = substitution("AA", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "xx";
    expect(actual).to.equal(expected);
  });
});
