import React from 'react';
import '../styles/App.css';
import imagesHelper from '../helpers/imagesHelper';
import images from '../images/images';

function App() {
  return (
      <div className='App'>
        <div className='scroll'>
          {imagesHelper(images)}
        </div>
      </div>
  );
}

export default App;
