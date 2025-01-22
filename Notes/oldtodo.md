import { useState } from "react";

function TodoList() { 
  const [tasks, setTasks] = useState([]); // State variable for tasks
  const [newTask, setNewTask] = useState(""); // State variable for new task

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, { text: newTask, completed: false }]); // Add task with completed status
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function toggleTaskCompletion(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h2>Todo List</h2>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="add-button"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li
            className="buttonStyling"
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            <span className="text">{task.text}</span>
            <button
              className="check-button"
              onClick={() => toggleTaskCompletion(index)}
            >
              {task.completed ? "✓ Completed" : "Complete?"}
            </button>
            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskUp(index)}
            >
              Move Up ⬆️
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskDown(index)}
            >
              Move Down ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
