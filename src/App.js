
import React from 'react';
import './App.css';
import Profile from './components/Profile';
import profileImg from './assets/profile.jpg';

const App = () => {
  const userProfile = {
    name: "Tenzin Thinley",
    title: "Frontend Developer",
    bio: "Passionate about coding and learning new technologies. On a journey to master React, Angular, and more!",
    imgSrc: profileImg,
  };

  return (
    <div className="App">
      <Profile 
        name={userProfile.name}
        title={userProfile.title}
        bio={userProfile.bio}
        imgSrc={userProfile.imgSrc} 
      />
    </div>
  );
};

export default App;

