import React, { useRef, useEffect } from 'react';
import '../styles/App.css';
import imagesHelper from '../helpers/imagesHelper';
import images from '../images/images';

function App() {

  const app = useRef();
  const scrollContainer = useRef();

  useEffect(() => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  }, []);

  return (
    <div ref={app} className='App'>
      <div ref={scrollContainer} className='scroll'>
        {imagesHelper(images)}
      </div>
    </div>
  );
}

export default App;
