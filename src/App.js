import React from 'react';
import BannerImage from './components/BannerImage';
import AlbumMaker from './components/AlbumMaker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
          <h1>Welcome To My Photojournal</h1>
          <h3>Mutasem mortada</h3>
          <AlbumMaker />
        </div>
      </header>
    </div>
  );
}

export default App;
