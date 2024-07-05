import React, { useState } from 'react';

const Progress = () => {
  const [progress, setProgress] = useState({ stepsTaken: '', caloriesConsumed: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProgress({ ...progress, [name]: value });
  }

  return (
    <div>
      <h2>Progress</h2>
      <form>
        <label>
          Steps Taken:
          <input type="number" name="stepsTaken" value={progress.stepsTaken} onChange={handleChange} />
        </label>
        <br />
        <label>
          Calories Consumed:
          <input type="number" name="caloriesConsumed" value={progress.caloriesConsumed} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default Progress;
