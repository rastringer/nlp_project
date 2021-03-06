var chai = require('chai')
var expect = chai.expect;
var frequency = require(__dirname + "/../lib/frequency.js");

describe('the frequency method', function(){
  it('should return counts of each word in a string', function(){
    var testString = 'Duck duck duck duck duck goose. There should be 6 ducks and 2 gooses.'
    var returnObject = frequency(testString);
    console.log(typeof returnObject);
    expect(returnObject).to.be.an('object');
    expect(returnObject.duck).to.eql(5);
    expect(returnObject.goose).to.eql(1);
  });
});
