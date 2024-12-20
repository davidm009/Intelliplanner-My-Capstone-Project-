import React, { useState, useEffect } from 'react';
// Local Storage saves data in browser.
const WeeklyPlanner = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [tasks, setTasks] = useState(() => {
    // Load/Get saved tasks from localStorage
    const savedTasks = localStorage.getItem("weeklyTasks");
    return savedTasks ? JSON.parse(savedTasks) : { // If savedTasks is not found, return empty tasks
      Monday: [], // Empty tasks for each day of the week
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    };
  });

  // Save updated tasks to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem("weeklyTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a task for a specific day
  const addTask = (day, task) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [day]: [...prevTasks[day], task],
    }));
  };

  // Delete a task for a specific day
  const deleteTask = (day, index) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [day]: prevTasks[day].filter((_, i) => i !== index),
    }));
  };

  // WeeklyPlanner format
  return (
    <div className="weekly-planner">
      <h2>Weekly Planner</h2>
      <h3><b>Plan your week ahead!</b></h3>
      <div className="days-container">
        {days.map((day) => ( // Map through each day of the week
          <div key={day} className="day">
            <h2>{day}</h2>
            <ul>
              {tasks[day].map((task, index) => (
                <li key={index} className="task-item">
                  {task}
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(day, index)}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
            <TaskInput day={day} addTask={addTask} />
          </div>
        ))}
      </div>
    </div>
  );
};

const TaskInput = ({ day, addTask }) => {
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(day, input);
      setInput('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder={`Add task for ${day}`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default WeeklyPlanner;
