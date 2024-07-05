import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({ name: '', age: '', height: '', weight: '' });
  const [profiles, setProfiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfiles([...profiles, profile]);
    setProfile({ name: '', age: '', height: '', weight: '' });
  }

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={profile.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          Height (cm):
          <input type="number" name="height" value={profile.height} onChange={handleChange} />
        </label>
        <br />
        <label>
          Weight (kg):
          <input type="number" name="weight" value={profile.weight} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Save Profile</button>
      </form>
      <h3>Saved Profiles</h3>
      <ul>
        {profiles.map((p, index) => (
          <li key={index}>{p.name}, Age: {p.age}, Height: {p.height} cm, Weight: {p.weight} kg</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
