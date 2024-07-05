import React, { useState } from 'react';

const Reminders = () => {
  const [reminder, setReminder] = useState({ workout: '', water: '' });
  const [reminders, setReminders] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReminder({ ...reminder, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setReminders([...reminders, reminder]);
    setReminder({ workout: '', water: '' });
  }

  return (
    <div>
      <h2>Reminders</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Workout Reminder:
          <input type="text" name="workout" value={reminder.workout} onChange={handleChange} />
        </label>
        <br />
        <label>
          Water Intake Reminder:
          <input type="text" name="water" value={reminder.water} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Save Reminder</button>
      </form>
      <h3>Saved Reminders</h3>
      <ul>
        {reminders.map((r, index) => (
          <li key={index}>Workout: {r.workout}, Water Intake: {r.water}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reminders;
