var Task = require("../task.js");
var assert = require("assert");

describe("Task", function(){

  var task1;

  beforeEach(function(){
    task1 = new Task("Own the noobs", 1, 10, 100)
  });

  it("Task has title", function(){
    assert.strictEqual("Own the noobs", task1.title)
  })
});
