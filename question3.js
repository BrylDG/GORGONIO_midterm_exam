let tasks: { id: number; name: string; description: string }[] = []; // Array to store tasks.
let ID = 1; // Auto-incrementing ID for tasks

// Add Task Function
function addTask(name, description) {
  const task = { id: ID++, name, description };
  tasks.push(task);
  console.log(`Task added:`, task);
}

// Update Task Function
function updateTask(id, newName, newDescription) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.name = newName;
    task.description = newDescription;
    console.log(`Task updated:`, task);
  } else {
    console.log(`Task not found.`);
  }
}

// Delete Task Function
function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    const removedTask = tasks.splice(index, 1)[0];
    console.log(`Task deleted:`, removedTask);
  } else {
    console.log(`Task not found.`);
  }
}

// View Tasks Function
function viewTasks() {
    if (tasks.length === 0) {
      console.log("No tasks available.");
    } else {
      console.log("Task List:");
      tasks.forEach(task => {
        console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
      });
    }
  }
  
