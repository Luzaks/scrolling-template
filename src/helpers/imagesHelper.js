import React from 'react';
import Hello from '../components/Hello';

const imagesHelper = (images) => {
  return(
    <>
      <Hello />
        {images.map((image, index) => (
            <div key={index}>
                <div className='img-container'>
                    <img src={image} alt={`people ${index}`}/>
                </div>
                <h2>
                    Skew <span className='outline'>Scrolling</span>
                </h2>
            </div>
        ))}
    </>
  );
};

export default imagesHelper;