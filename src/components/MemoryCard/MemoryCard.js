import React, { useState } from 'react';
import './MemoryCard.css';

function MemoryCard({ title, desc, images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex === 0 ? (images?.length || 1) - 1 : prevIndex - 1)
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex === (images?.length || 1) - 1 ? 0 : prevIndex + 1)
    );
  };

  // Fallback image in case `images` is empty or undefined
  const fallbackImage = '/assets/journey/fallback.jpg';

  return (
    <div className="memory-card">
      {/* Image Slider */}
      <div className="memory-card-image">
        <img 
          src={(images && images.length > 0) ? images[currentImageIndex] : fallbackImage} 
          alt={title} 
        />
        {images && images.length > 1 && (
          <div className="slider-controls">
            <button onClick={handlePrevClick}>&lt;</button>
            <button onClick={handleNextClick}>&gt;</button>
          </div>
        )}
      </div>
      {/* Title and Description */}
      <div className="memory-card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default MemoryCard;
