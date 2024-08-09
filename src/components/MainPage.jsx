import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <section>
        <h1>About Me</h1>
        <p>Details about you.</p>
      </section>
      
      <section>
        <h2>Projects</h2>
        <div>
          <Link to="/project/1">Project 1</Link>
          <Link to="/project/2">Project 2</Link>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
