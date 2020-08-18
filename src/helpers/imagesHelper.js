import React from 'react';

const imagesHelper = (images) => {
  return(
    images.map((image, index) => (
      <div key={index}>
        <div className='img-container'>
          <img src={image} alt={`people ${index}`} />
        </div>
        <h2>
          Skew <span className='outline'>Scrolling</span>
        </h2>
      </div>
    ))
  );
};

export default imagesHelper;