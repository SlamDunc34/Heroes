var Food = require("../food.js");
var assert = require("assert");

describe("Food", function(){

  var food1;

  beforeEach(function(){
    food1 = new Food("Curry", 5)
  });

  it("Food has a title", function(){
    assert.strictEqual("Curry", food1.title)
  })
});

