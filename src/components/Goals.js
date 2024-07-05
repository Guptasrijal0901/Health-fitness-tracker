import React, { useState } from 'react';

const Goals = () => {
  const [goal, setGoal] = useState({ dailySteps: '', caloriesIntake: '' });
  const [goals, setGoals] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal({ ...goal, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals([...goals, goal]);
    setGoal({ dailySteps: '', caloriesIntake: '' });
  }

  return (
    <div>
      <h2>Goals</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Daily Steps:
          <input type="number" name="dailySteps" value={goal.dailySteps} onChange={handleChange} />
        </label>
        <br />
        <label>
          Daily Calories Intake:
          <input type="number" name="caloriesIntake" value={goal.caloriesIntake} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Save Goal</button>
      </form>
      <h3>Saved Goals</h3>
      <ul>
        {goals.map((g, index) => (
          <li key={index}>Daily Steps: {g.dailySteps}, Calories Intake: {g.caloriesIntake}</li>
        ))}
      </ul>
    </div>
  );
}

export default Goals;
