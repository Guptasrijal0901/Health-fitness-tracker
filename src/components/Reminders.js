import React, { useState } from 'react';

const Reminders = () => {
  const [reminders, setReminders] = useState({ workout: '', water: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReminders({ ...reminders, [name]: value });
  }

  return (
    <div>
      <h2>Reminders</h2>
      <form>
        <label>
          Workout Reminder:
          <input type="text" name="workout" value={reminders.workout} onChange={handleChange} />
        </label>
        <br />
        <label>
          Water Intake Reminder:
          <input type="text" name="water" value={reminders.water} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default Reminders;
