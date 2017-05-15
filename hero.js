var Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype = {
  talk: function() {
    return "My name is " + this.name
  },
  addtask: function(task){
    this.tasks.push(task)
  },
  eat: function(food) {
    var multiplier = 1
    if (food.title === this.favFood) multiplier = 1.5;
    this.health += food.replenishmentValue * multiplier
  },
  sortTasks: function(){
    var sortedTasks = this.tasks.sort(function(task1, task2){
      return task1.urgency - task2.urgency
    })
    return sortedTasks;

  }
};

module.exports = Hero; 