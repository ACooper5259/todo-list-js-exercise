// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescritpion = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    descritpion: description,
    complete: false,
    logTaskState: function(task) {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);,
    }
    completeTask: function(task) {
      this.complete = true;
    }
  }
  return task;
};



// Print the state of a task to the console in a nice readable way

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// DRIVER CODE BELOW

const task1 = newTask('clean cat litter', "Take all the 💩 out of the litter box" )
const task2 = newTask('Do Laundry', "😨"); // task 1
const tasks = [task1, task2]


logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks)
