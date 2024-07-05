import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Goals from './Goals';
import Progress from './Progress';
import Reminders from './Reminders';

const App = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Goals />
      <Progress />
      <Reminders />
    </div>
  );
}

export default App;
