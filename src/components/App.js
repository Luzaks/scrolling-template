import React, { useRef, useEffect } from 'react';
import '../styles/App.css';
import imagesHelper from '../helpers/imagesHelper';
import images from '../images/images';
import useWindowSize from '../hooks/useWindowsSize';

function App() {

  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  const skewScrolling = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;


    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 16;

    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div ref={app} className='App'>
      <div ref={scrollContainer} className='scroll'>
        {imagesHelper(images)}
      </div>
    </div>
  );
}

export default App;
