import React from 'react';
import './App.css';

import { YoutubePlayer } from './components/YoutubePlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <YoutubePlayer videoId='zrProK5R7ms'/>
      </header>
    </div>
  );
}

export default App;
