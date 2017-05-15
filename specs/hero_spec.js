var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");

var assert = require("assert");

describe("Hero", function(){

  var hero;
  var task1;
  var task2;
  var task3;
  var food1;
  var food2;

  beforeEach(function(){
    hero = new Hero("Dunc", 100, "Curry")
    task1 = new Task("Own the noobs", 1, 10, 100)
    task2 = new Task("Take the bins out", 2, 5, 20)
    task3 = new Task("Bring down the government", 10, 2, 60)
    food1 = new Food("Curry", 5 )
    food2 = new Food("Potatoes", 3)
  });

  it("Hero has a name", function(){
    assert.strictEqual("Dunc", hero.name);

  });

  it("Hero can talk", function(){
    assert.strictEqual("My name is Dunc", hero.talk())
  })

  it("Hero can add tasks", function(){
    hero.addtask(task1);
    assert.strictEqual(1, hero.tasks.length)
  })
  
  it("Hero can eat food", function(){
    hero.eat(food2);
    assert.strictEqual(103, hero.health)
  })

  it("Hero likes his favourite food", function(){
    hero.eat(food1)
    assert.strictEqual(107.5, hero.health)
  })

  it("Hero can sort tasks by urgency", function(){
    hero.addtask(task3);
    hero.addtask(task1);
    hero.addtask(task2);
    hero.sortTasks()
    console.log(hero.tasks)
    assert.deepEqual( 10, hero.tasks[hero.tasks.length-1].urgency)
  })


});
