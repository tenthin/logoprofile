import React, { useState, useEffect } from 'react';
import '../index.css';

const Profile = ({ name, title, bio, imgSrc }) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [animateOnLoad, setAnimateOnLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateOnLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="profile-container">
      {!expanded && (
        <div
          className={`profile-image ${hovered ? 'hovered' : ''} ${animateOnLoad ? 'rotate-on-load' : ''}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setExpanded(true)}
        >
          <img src={imgSrc} alt={name} className="profile-img" />
        </div>
      )}

      {expanded && (
        <div className="expanded-profile">
          <h1>{name}</h1>
          <p>{title}</p>
          <p>{bio}</p>
          <a href="https://tenthin.github.io/firstsem-react-project/" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
          <br />
          <button onClick={() => setExpanded(false)} className="close-button">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
