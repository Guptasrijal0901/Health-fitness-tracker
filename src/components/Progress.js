import React, { useState } from 'react';

const Progress = () => {
  const [progress, setProgress] = useState({ stepsTaken: '', caloriesConsumed: '' });
  const [progressList, setProgressList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProgress({ ...progress, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setProgressList([...progressList, progress]);
    setProgress({ stepsTaken: '', caloriesConsumed: '' });
  }

  return (
    <div>
      <h2>Progress</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Steps Taken:
          <input type="number" name="stepsTaken" value={progress.stepsTaken} onChange={handleChange} />
        </label>
        <br />
        <label>
          Calories Consumed:
          <input type="number" name="caloriesConsumed" value={progress.caloriesConsumed} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Save Progress</button>
      </form>
      <h3>Saved Progress</h3>
      <ul>
        {progressList.map((p, index) => (
          <li key={index}>Steps Taken: {p.stepsTaken}, Calories Consumed: {p.caloriesConsumed}</li>
        ))}
      </ul>
    </div>
  );
}

export default Progress;
