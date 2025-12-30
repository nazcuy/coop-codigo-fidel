import React from 'react';
import Presentation from '../components/Presentation';
import News from '../components/News';
import Projects from '../components/Projects';

function Home() {
  return (
    <div className="home">
      <Presentation />
      <News />
      <Projects />
    </div>
  );
}

export default Home;
