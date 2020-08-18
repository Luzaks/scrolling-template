import React, { useRef, useEffect } from 'react';
import '../styles/App.css';
import imagesHelper from '../helpers/imagesHelper';
import images from '../images/images';
import useWindowSize from '../hooks/useWindowsSize';

function App() {

  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();

  useEffect(() => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  }, [size.height]);

  return (
    <div ref={app} className='App'>
      <div ref={scrollContainer} className='scroll'>
        {imagesHelper(images)}
      </div>
    </div>
  );
}

export default App;
