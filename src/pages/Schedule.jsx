import React, { useState, useEffect } from 'react';
// Local Storage saves data in browser.
function Schedule() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [activity, setActivity] = useState('');
  const [schedule, setSchedule] = useState(() => {
    // Load schedule from localStorage
    const savedSchedule = localStorage.getItem("schedule");
    return savedSchedule ? JSON.parse(savedSchedule) : [];
  });

  useEffect(() => {
    // Save schedule to localStorage whenever schedule state changes
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  const editStartTime = (e) => setStartTime(e.target.value);
  const editEndTime = (e) => setEndTime(e.target.value);
  const editActivity = (e) => setActivity(e.target.value);

  const addActivity = () => {
    if (startTime && endTime && activity) {
      setSchedule(prev => {
        const updatedSchedule = [
          ...prev,
          { startTime, endTime, activity, completed: false } // Add completed property
        ];
        return updatedSchedule.sort((a, b) => a.startTime.localeCompare(b.startTime));
      });
      setStartTime('');
      setEndTime('');
      setActivity('');
    }
  };

  const toggleCompletion = (index) => {
    const updatedSchedule = schedule.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setSchedule(updatedSchedule);
  };

  const deleteActivity = (index) => {
    const updatedSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(updatedSchedule);
  };

  const formatTimeTo12Hour = (time) => {
    const [hour, minute] = time.split(':');
    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute} ${period}`;
  };

  return (
    <div className='daily-schedule'>
      <h2>Today's Schedule</h2>
      <h3><b>Plan out your day!</b></h3>
      <div>
        <input type="time" value={startTime} onChange={editStartTime} />
        <span>to</span>
        <input type="time" value={endTime} onChange={editEndTime} />
        <input
          type="text"
          placeholder="Enter activity..."
          value={activity}
          onChange={editActivity}
        />
        <button className="addScheduleButton" onClick={addActivity}>Add</button>
      </div>

      <ul>
        {schedule.map((item, index) => (
          <li key={index} className={`${item.completed ? "completed" : ""} listStyle`}>
            <span>
              {formatTimeTo12Hour(item.startTime)} - {formatTimeTo12Hour(item.endTime)}:
            </span>
            <span>{` ${item.activity}`}</span>
            <button className="markButton" onClick={() => toggleCompletion(index)}>
              {item.completed ? "Undo" : "Mark as Completed"}
            </button>
            <button className="deleteScheduleButton" onClick={() => deleteActivity(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;